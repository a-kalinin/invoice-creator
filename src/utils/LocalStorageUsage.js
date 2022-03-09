export default class LocalStorageUsage {
  constructor(storageName, initValue) {
    this.getStorageName = () => storageName;

    if (this.get() === null) {
      this.set(initValue);
    }
  }

  get() {
    const val = localStorage.getItem(this.getStorageName());
    if (val) return JSON.parse(val);
    return null;
  }

  set(val) {
    return localStorage.setItem(this.getStorageName(), JSON.stringify(val));
  }
}
