interface Character {
  name: string;
  id: number;
  found?: boolean;
  coordinates?: coordinates;
}
interface formParams {
  stageid: string;
}
interface formData {
  username: string;
  time: number;
}
interface stageData {
  id: number;
  name: string;
  img_url: string;
  Character: [Character];
}
interface Stage {
  id: number;
  img_url: string;
  name: string;
  score: [Score];
}
interface Score {
  id: number;
  username: string;
  time: number;
}
interface scoreData {
  username: string;
  time: number;
}
interface targetBoxProps {
  targets: [Character];
  coordinates: coordinates;
  guess: function;
}
interface guess {
  characterid: number;
  coordinates: coordinates;
}
interface coordinates {
  x: number;
  y: number;
}
interface guessResponse extends Response.body {
  success: {
    character: Character;
    message: string;
  };
  error: string;
}
