export class AlreadyExistsError extends Error {
  constructor() {
    super("Already Exists Data");
    this.name = "Already Exists Data";
  }
}
