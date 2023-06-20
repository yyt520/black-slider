export function attachPropertiesToComponent(component, properties) {
  var ret = component;
  for (var key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}