export const match = (user, pc) => {
  if (user === pc) {
    return "draw";
  } else if (
    (user === "rock" && pc === "scissors") ||
    (user === "scissors" && pc === "paper") ||
    (user === "paper" && pc === "rock")
  ) {
    return "User Win";
  } else if (
    (pc === "rock" && user === "scissors") ||
    (pc === "scissors" && user === "paper") ||
    (pc === "paper" && user === "rock")
  ) {
    return "Pc Win";
  }
};
