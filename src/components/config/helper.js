
const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
});

export const formatValue = (value) => {
  return formatter.format(value);
};

export const handleCount = (value, setter, sign) => {
  if (sign === "-") {
    if (value === 1) {
      return setter(1);
    } else {
      return setter(value - 1);
    }
  } else if (sign === "+") {
    if (value === 10) {
      return setter(10);
    } else {
      return setter(value + 1);
    }
  }
};

export const alterRedemption = (
  x,
  setter,
  array,
  arraySetter,
  setSelectField
) => {
  setter("none");
  if (x === 2) {
    setSelectField("none");
  }
  return arraySetter({ ...array, Delivery_method: x });
};
