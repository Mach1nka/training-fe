export class MockDefaultState<State extends object> {
  private readonly originalState: Readonly<State>;

  state: State;

  constructor(state: State) {
    this.originalState = { ...state };
    this.state = state;
  }

  resetState = () => {
    this.state = this.originalState;
  };
}
