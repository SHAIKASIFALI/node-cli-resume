const os = require("os");
const fs = require("fs");
const path = require("path");
const { Input, Confirm } = require("enquirer");
const to = require("await-to-js").default;
const handleError = require("cli-handle-error");
const shouldCancel = require("cli-should-cancel");

async function inputFunc({ name, message, hint, initial }) {
  const [err, response] = await to(
    new Input({
      name,
      message,
      hint,
      initial,
      validate(value, state) {
        if (state && state.name === `firstName`) {
          if (fs.existsSync(value)) {
            return `Directory already exists: ./${value}`;
          } else {
            return true;
          }
        }
        return !value ? `Please add a value.` : true;
      },
    })
      .on(`cancel`, () => shouldCancel())
      .run()
  );
  handleError(`INPUT`, err);

  return response;
}

async function confirmFunc({ name, message, hint, initial }) {
  const [err, response] = await to(
    new Confirm({
      name,
      message,
      hint,
      initial,
    })
      .on(`cancel`, () => shouldCancel())
      .run()
  );
  handleError(`Confirm`, err);
  return response;
}

module.exports = { inputFunc, confirmFunc };
