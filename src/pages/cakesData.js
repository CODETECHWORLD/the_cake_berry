// src/data/cakesData.js

import img1 from "../assets/thecakeberry1.jpg";
import img2 from "../assets/thecakeberry2.jpg";
import img3 from "../assets/thecakeberry3.jpg";
import img4 from "../assets/thecakeberry4.jpg";
import img5 from "../assets/thecakeberry5.jpg";
import img6 from "../assets/thecakeberry6.jpg";

// ---------------- Normal Cakes ----------------
export const cakesData = [
  {
    category: "Berry Flavours",
    items: [
      {
        name: "Black Forest",
        image: img1,
        variants: {
          normal: { halfKg: 200, oneKg: 350 },
          eggless: { halfKg: 250, oneKg: 450 },
        },
      },
      {
        name: "White Forest",
        image: img2,
        variants: {
          normal: { halfKg: 300, oneKg: 250 },
          eggless: { halfKg: 550, oneKg: null },
        },
      },
      {
        name: "Pineapple",
        image: img3,
        variants: {
          normal: { halfKg: 250, oneKg: 450 },
          eggless: { halfKg: 450, oneKg: 300 },
        },
      },
      {
        name: "Mango",
        image: img4,
        variants: {
          normal: { halfKg: 250, oneKg: 550 },
          eggless: { halfKg: 450, oneKg: 300 },
        },
      },
      {
        name: "Strawberry",
        image: img5,
        variants: {
          normal: { halfKg: 250, oneKg: 550 },
          eggless: { halfKg: 450, oneKg: 300 },
        },
      },
      {
        name: "Black Current",
        image: img6,
        variants: {
          normal: { halfKg: 250, oneKg: 550 },
          eggless: { halfKg: 450, oneKg: 300 },
        },
      },
    ],
  },
  {
    category: "Chocolate Flavours",
    items: [
      {
        name: "Choco Vennila",
        image: img2,
        variants: {
          normal: { halfKg: 280, oneKg: 500 },
          eggless: { halfKg: null, oneKg: null },
        },
      },
      {
        name: "Oreo Chocolate Cream",
        image: img3,
        variants: {
          normal: { halfKg: 300, oneKg: 550 },
          eggless: { halfKg: 350, oneKg: 650 },
        },
      },
      {
        name: "Truffle Cake",
        image: img4,
        variants: {
          normal: { halfKg: 350, oneKg: 600 },
          eggless: { halfKg: 400, oneKg: 700 },
        },
      },
      {
        name: "Kitkat Chocolate",
        image: img5,
        variants: {
          normal: { halfKg: 300, oneKg: 550 },
          eggless: { halfKg: 350, oneKg: 650 },
        },
      },
      {
        name: "Ferrero Rocher",
        image: img6,
        variants: {
          normal: { halfKg: 400, oneKg: 750 },
          eggless: { halfKg: 450, oneKg: 850 },
        },
      },
    ],
  },
  {
    category: "Classic Combo",
    items: [
      {
        name: "Butter Scotch with Mango",
        image: img4,
        variants: {
          normal: { halfKg: 300, oneKg: 550 },
          eggless: { halfKg: 300, oneKg: 550 },
        },
      },
      {
        name: "Choco Strawberry",
        image: img5,
        variants: {
          normal: { halfKg: 300, oneKg: 550 },
          eggless: { halfKg: null, oneKg: null },
        },
      },
      {
        name: "Choco Pineapple",
        image: img1,
        variants: {
          normal: { halfKg: 350, oneKg: 600 },
          eggless: { halfKg: 400, oneKg: 650 },
        },
      },
      {
        name: "Mango Strawberry",
        image: img2,
        variants: {
          normal: { halfKg: 300, oneKg: 500 },
          eggless: { halfKg: 350, oneKg: 600 },
        },
      },
      {
        name: "Double Chocolate Delight",
        image: img3,
        variants: {
          normal: { halfKg: 400, oneKg: 700 },
          eggless: { halfKg: 450, oneKg: 800 },
        },
      },
    ],
  },
];

// ---------------- Custom Cakes ----------------
export const customCakesData = [
  {
    category: "Design Cakes",
    items: [
      { name: "Wedding Cake", image: img1, price: 1200 },
      { name: "Birthday Theme Cake", image: img2, price: 950 },
      { name: "Anniversary Heart Cake", image: img3, price: 1100 },
      { name: "Baby Shower Cake", image: img4, price: 1350 },
      { name: "Rose Floral Cake", image: img5, price: 1250 },
      { name: "Elegant Tier Cake", image: img6, price: 1800 },
    ],
  },
  {
    category: "Model Cakes",
    items: [
      { name: "Car Shaped Cake", image: img4, price: 1500 },
      { name: "Cartoon Cake", image: img5, price: 1100 },
      { name: "Cricket Theme Cake", image: img6, price: 1400 },
      { name: "Doll Cake", image: img1, price: 1250 },
      { name: "Superhero Cake", image: img2, price: 1600 },
      { name: "Unicorn Fantasy Cake", image: img3, price: 1700 },
    ],
  },
];
