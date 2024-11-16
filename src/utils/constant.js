import { ang2Rad } from "./helper";
import mode1Img from "assets/img/select_game_random.png";
import mode2Img from "assets/img/select_game_friend.png";
import mode3Img from "assets/img/select_game_computer.png";
import classicHeader from "assets/img/1v1_classic_header.png";
import silverHeader from "assets/img/1v1_silver_header.png";
import goldHeader from "assets/img/1v1_gold_header.png";
import platinumHeader from "assets/img/1v1_platinum_header.png";
import diamondHeader from "assets/img/1v1_diamond_header.png";
import classicBg from "assets/img/1v1_classic_bg.png";
import silverBg from "assets/img/1v1_silver_bg.png";
import goldBg from "assets/img/1v1_gold_bg.png";
import platinumBg from "assets/img/1v1_platinum_bg.png";
import diamondBg from "assets/img/1v1_diamond_bg.png";

export const rooms = [
  {
    name: "Classic Room",
    pool: "Pool: No rewards",
    desc: "Players can play for free 1v1 against another player",
    icon: classicHeader,
    bg: classicBg,
  },
  {
    name: "Silver Room",
    pool: "Pool: 98 $LLG",
    desc: "Each player needs to put in 50 $LLG",
    icon: silverHeader,
    bg: silverBg,
  },
  {
    name: "Gold Room",
    pool: "Pool: 198 $LLG",
    desc: "Each player needs to put in 100 $LLG",
    icon: goldHeader,
    bg: goldBg,
  },
  {
    name: "Platinum Room",
    pool: "Pool: 392 $LLG",
    desc: "Each player needs to put in 200 $LLG",
    icon: platinumHeader,
    bg: platinumBg,
  },
  {
    name: "Diamond Room",
    pool: "Pool: 980 $LLG",
    desc: "Each player needs to put in 500 $LLG",
    icon: diamondHeader,
    bg: diamondBg,
  }
];

export const gameModeItems = [
  {
    label: "Match with Random User",
    image: mode1Img,
    navigateTo: "/matchPlay",
  },
  {
    label: "Match with Friend",
    image: mode2Img,
    navigateTo: "/friendPlay",
  },
  {
    label: "Match with Computer",
    image: mode3Img,
    navigateTo: "/machinePlay",
  },
];

export const cameraProps = {
  fov: 60,
  // aspect: window.innerWidth / window.innerHeight,
  aspect: 16 / 9,
  near: 0.1,
  far: 2000,
  position: {
    x: 0,
    y: 8,
    z: -6,
  }
}

export const orbitControlProps = {
  target: {
    x: 0,
    y: 0,
    z: 0,
  },
  maxPolarAngle: ang2Rad(70),
  maxDistance: 50,
  minDistance: 5,
}

export const bloomParams = {
  exposure: 1,
  bloomStrength: 0.25,
  bloomThreshold: 0,
  bloomRadius: 0.1
};

export const hemiLightProps = {
  skyColor: 0xcccccc,
  groundColor: 0x000000,
  intensity: 0.45,
}

export const spotLightProps = {
  color: 0xcccccc,
  intensity: 0.6,
  position: {
    x: -25,
    y: 25,
    z: 25,
  },
  castShadow: true,
  shadow: {
    bias: -0.0001,
    mapSize: {
      width: 1024 * 4,
      height: 1024 * 4,
    }
  }
}

export const spotLightProps2 = {
  color: 0xcccccc,
  intensity: 0.6,
  position: {
    x: 25,
    y: 25,
    z: 25,
  },
  castShadow: true,
  shadow: {
    bias: -0.0001,
    mapSize: {
      width: 1024 * 4,
      height: 1024 * 4,
    }
  }
}

export const pieceMoveSpeed = 10;

export const aiLevel = 3;   // 3: advanced Up to 3;

export const alphaBet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export const tileSize = 1.02;

export const lightTone = '#b18057';
export const darkTone = '#0a181f';
export const selectTone = '#d78b00';
export const historyTone = '#ff0000';
export const dangerTone = '#d32da7';

export const boardSize = 8;

export const modelSize = 0.8;

export const modelProps = {
  'mountain': {
    scale: 1.2,
    position: {
      x: 16,
      y: 0.4,
      z: 5,
    },
    rotate: {
      x: 0,
      y: 10,
      z: 0,
    }
  },
  'board': {
    scale: modelSize + 0.0125,
    position: {
      x: 0,
      y: 0.5,
      z: 0,
    }
  },
  'cell': {
    scale: modelSize,
    position: {
      x: 0,
      y: 0.6,
      z: 0,
    }
  }
}

export const gameModes = {
  'P2E': 0,
  'P2P': 1,
  'practise': 2
}

export const userTypes = {
  'creator': 0,
  'joiner': 1,
  'observer': 2,
}

export const resizeUpdateInterval = 500;

export const heroItems = {
  iceWall: 1,
  petrify: 2,
  jumpyShoe: 3,
  springPad: 4,
  thunderstorm: 5
};

export const timeLimit = 30;