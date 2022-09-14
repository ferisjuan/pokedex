const map = new WeakMap();
let index = 0;

type Key = string | number | symbol;
export const keygen = (obj: Record<Key, unknown>) => {
  let key = map.get(obj);
  if (!key) {
    key = "weak-key-" + index++;
    map.set(obj, key);
  }
  return key;
};
