export default function getBorderColor(playerHand) {
  switch (playerHand) {
    case "rock":
      return "#dc2e4e";
    case "paper":
      return "#4865f4";
    case "scissors":
      return "#ec9e0e";
    case "lizard":
      return "#834fe3";
    case "spock":
      return "#40b9ce";
  }
}
