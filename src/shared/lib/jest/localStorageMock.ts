export class LocalStorageMock implements Omit<Storage, 'key'> {
  state: string;

  length: number;

  constructor(state: Record<string, any> = {}) {
    this.state = JSON.stringify(state);
    this.length = Object.keys(state).length;
  }

  getItem(key: string): string | null {
    return JSON.stringify(JSON.parse(this.state)[key] || null);
  }

  setItem(key: string, value: any): void {
    const parsed = JSON.parse(this.state);
    parsed[key] = value;
    this.state = JSON.stringify(parsed);
    this.length = Object.keys(parsed).length;
  }

  removeItem(key: string): void {
    const parsed = JSON.parse(this.state);
    delete parsed[key];
    this.state = JSON.stringify(parsed);
    this.length = Object.keys(parsed).length;
  }

  clear() {
    this.state = JSON.stringify({});
    this.length = 0;
  }
}
