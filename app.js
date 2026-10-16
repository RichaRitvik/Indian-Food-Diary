const $ = id => document.getElementById(id);
const mealNames = ["Breakfast", "Lunch", "Snacks", "Dinner"];
const mealMeta = {
  Breakfast: { emoji: "🌅", hint: "A fresh start to your day", cls: "breakfast" },
  Lunch: { emoji: "☀️", hint: "Your midday meal", cls: "lunch" },
  Snacks: { emoji: "🍊", hint: "Little bites and sips", cls: "snacks" },
  Dinner: { emoji: "🌙", hint: "Your evening meal", cls: "dinner" }
};
const foods = [
  {
    "name": "Idli (1 medium)",
    "calories": 58,
    "protein": 2,
    "carbs": 12,
    "fat": 0.2,
    "fibre": 0.5
  },
  {
    "name": "Plain dosa (1 medium)",
    "calories": 133,
    "protein": 3,
    "carbs": 20,
    "fat": 4,
    "fibre": 1
  },
  {
    "name": "Poha (1 cup)",
    "calories": 250,
    "protein": 5,
    "carbs": 40,
    "fat": 8,
    "fibre": 3
  },
  {
    "name": "Upma (1 cup)",
    "calories": 220,
    "protein": 5,
    "carbs": 35,
    "fat": 7,
    "fibre": 3
  },
  {
    "name": "Roti / chapati (1 medium)",
    "calories": 110,
    "protein": 3.5,
    "carbs": 18,
    "fat": 3,
    "fibre": 3
  },
  {
    "name": "Cooked rice (1 cup)",
    "calories": 205,
    "protein": 4.3,
    "carbs": 45,
    "fat": 0.4,
    "fibre": 0.6
  },
  {
    "name": "Dal (1 cup)",
    "calories": 180,
    "protein": 10,
    "carbs": 27,
    "fat": 4,
    "fibre": 8
  },
  {
    "name": "Paneer (100 g)",
    "calories": 265,
    "protein": 18,
    "carbs": 4,
    "fat": 20,
    "fibre": 0
  },
  {
    "name": "Curd / dahi (1 cup)",
    "calories": 150,
    "protein": 8,
    "carbs": 11,
    "fat": 8,
    "fibre": 0
  },
  {
    "name": "Sambar (1 cup)",
    "calories": 130,
    "protein": 6,
    "carbs": 20,
    "fat": 3,
    "fibre": 5
  },
  {
    "name": "Chole (1 cup)",
    "calories": 260,
    "protein": 12,
    "carbs": 38,
    "fat": 7,
    "fibre": 10
  },
  {
    "name": "Rajma (1 cup)",
    "calories": 225,
    "protein": 13,
    "carbs": 40,
    "fat": 2,
    "fibre": 11
  },
  {
    "name": "Banana (1 medium)",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.4,
    "fibre": 3.1
  },
  {
    "name": "Apple (1 medium)",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "fibre": 4.4
  },
  {
    "name": "Boiled egg (1)",
    "calories": 78,
    "protein": 6.3,
    "carbs": 0.6,
    "fat": 5.3,
    "fibre": 0
  },
  {
    "name": "Milk (1 cup)",
    "calories": 122,
    "protein": 8,
    "carbs": 12,
    "fat": 5,
    "fibre": 0
  },
  {
    "name": "Peanuts (30 g)",
    "calories": 170,
    "protein": 7,
    "carbs": 5,
    "fat": 14,
    "fibre": 2.5
  },
  {
    "name": "Almonds (10)",
    "calories": 70,
    "protein": 2.5,
    "carbs": 2.5,
    "fat": 6,
    "fibre": 1.5
  },
  {
    "name": "Vegetable pulao (1 cup)",
    "calories": 260,
    "protein": 5,
    "carbs": 42,
    "fat": 8,
    "fibre": 3
  },
  {
    "name": "Chicken curry (1 cup)",
    "calories": 280,
    "protein": 25,
    "carbs": 8,
    "fat": 16,
    "fibre": 2
  },
  {
    "name": "Masala dosa (1 medium)",
    "calories": 250,
    "protein": 5,
    "carbs": 36,
    "fat": 9,
    "fibre": 3
  },
  {
    "name": "Rava idli (1 medium)",
    "calories": 85,
    "protein": 2.5,
    "carbs": 13,
    "fat": 2.5,
    "fibre": 1
  },
  {
    "name": "Uttapam (1 medium)",
    "calories": 180,
    "protein": 5,
    "carbs": 28,
    "fat": 5,
    "fibre": 2
  },
  {
    "name": "Besan chilla (1 medium)",
    "calories": 120,
    "protein": 6,
    "carbs": 14,
    "fat": 4,
    "fibre": 3
  },
  {
    "name": "Moong dal chilla (1 medium)",
    "calories": 110,
    "protein": 7,
    "carbs": 16,
    "fat": 2,
    "fibre": 3
  },
  {
    "name": "Aloo paratha (1 medium)",
    "calories": 260,
    "protein": 6,
    "carbs": 38,
    "fat": 9,
    "fibre": 5
  },
  {
    "name": "Paneer paratha (1 medium)",
    "calories": 290,
    "protein": 10,
    "carbs": 36,
    "fat": 11,
    "fibre": 4
  },
  {
    "name": "Plain paratha (1 medium)",
    "calories": 180,
    "protein": 4,
    "carbs": 26,
    "fat": 7,
    "fibre": 3
  },
  {
    "name": "Puri (1 medium)",
    "calories": 90,
    "protein": 2,
    "carbs": 10,
    "fat": 5,
    "fibre": 1
  },
  {
    "name": "Bhatura (1 medium)",
    "calories": 280,
    "protein": 7,
    "carbs": 42,
    "fat": 9,
    "fibre": 3
  },
  {
    "name": "Thepla (1 medium)",
    "calories": 120,
    "protein": 3,
    "carbs": 17,
    "fat": 4,
    "fibre": 3
  },
  {
    "name": "Khichdi (1 cup)",
    "calories": 220,
    "protein": 8,
    "carbs": 36,
    "fat": 5,
    "fibre": 5
  },
  {
    "name": "Curd rice (1 cup)",
    "calories": 230,
    "protein": 7,
    "carbs": 38,
    "fat": 5,
    "fibre": 2
  },
  {
    "name": "Lemon rice (1 cup)",
    "calories": 260,
    "protein": 5,
    "carbs": 42,
    "fat": 8,
    "fibre": 2
  },
  {
    "name": "Jeera rice (1 cup)",
    "calories": 230,
    "protein": 4,
    "carbs": 43,
    "fat": 4,
    "fibre": 1
  },
  {
    "name": "Vegetable biryani (1 cup)",
    "calories": 280,
    "protein": 6,
    "carbs": 42,
    "fat": 9,
    "fibre": 4
  },
  {
    "name": "Chicken biryani (1 cup)",
    "calories": 350,
    "protein": 18,
    "carbs": 42,
    "fat": 12,
    "fibre": 2
  },
  {
    "name": "Plain dal tadka (1 cup)",
    "calories": 190,
    "protein": 10,
    "carbs": 25,
    "fat": 6,
    "fibre": 7
  },
  {
    "name": "Moong dal cooked (1 cup)",
    "calories": 180,
    "protein": 12,
    "carbs": 30,
    "fat": 1,
    "fibre": 8
  },
  {
    "name": "Masoor dal cooked (1 cup)",
    "calories": 190,
    "protein": 13,
    "carbs": 32,
    "fat": 1,
    "fibre": 8
  },
  {
    "name": "Toor dal cooked (1 cup)",
    "calories": 200,
    "protein": 11,
    "carbs": 34,
    "fat": 2,
    "fibre": 7
  },
  {
    "name": "Kala chana (1 cup)",
    "calories": 240,
    "protein": 13,
    "carbs": 40,
    "fat": 4,
    "fibre": 11
  },
  {
    "name": "Green peas cooked (1 cup)",
    "calories": 134,
    "protein": 8.6,
    "carbs": 25,
    "fat": 0.4,
    "fibre": 8.8
  },
  {
    "name": "Aloo sabzi (1 cup)",
    "calories": 180,
    "protein": 3,
    "carbs": 30,
    "fat": 6,
    "fibre": 4
  },
  {
    "name": "Bhindi sabzi (1 cup)",
    "calories": 130,
    "protein": 3,
    "carbs": 14,
    "fat": 7,
    "fibre": 5
  },
  {
    "name": "Aloo gobi (1 cup)",
    "calories": 150,
    "protein": 4,
    "carbs": 20,
    "fat": 7,
    "fibre": 5
  },
  {
    "name": "Palak paneer (1 cup)",
    "calories": 280,
    "protein": 14,
    "carbs": 12,
    "fat": 20,
    "fibre": 5
  },
  {
    "name": "Matar paneer (1 cup)",
    "calories": 300,
    "protein": 13,
    "carbs": 20,
    "fat": 20,
    "fibre": 5
  },
  {
    "name": "Shahi paneer (1 cup)",
    "calories": 350,
    "protein": 12,
    "carbs": 16,
    "fat": 27,
    "fibre": 3
  },
  {
    "name": "Mixed vegetable curry (1 cup)",
    "calories": 170,
    "protein": 4,
    "carbs": 20,
    "fat": 8,
    "fibre": 5
  },
  {
    "name": "Soya chunks curry (1 cup)",
    "calories": 220,
    "protein": 20,
    "carbs": 18,
    "fat": 8,
    "fibre": 6
  },
  {
    "name": "Kadhi (1 cup)",
    "calories": 180,
    "protein": 6,
    "carbs": 20,
    "fat": 8,
    "fibre": 2
  },
  {
    "name": "Rasam (1 cup)",
    "calories": 60,
    "protein": 2,
    "carbs": 10,
    "fat": 1,
    "fibre": 2
  },
  {
    "name": "Coconut chutney (2 tbsp)",
    "calories": 70,
    "protein": 1,
    "carbs": 3,
    "fat": 6,
    "fibre": 1
  },
  {
    "name": "Mint chutney (2 tbsp)",
    "calories": 20,
    "protein": 1,
    "carbs": 3,
    "fat": 0.5,
    "fibre": 1
  },
  {
    "name": "Pickle (1 tbsp)",
    "calories": 45,
    "protein": 0.5,
    "carbs": 2,
    "fat": 4,
    "fibre": 0.5
  },
  {
    "name": "Papad roasted (1 piece)",
    "calories": 35,
    "protein": 2,
    "carbs": 5,
    "fat": 0.5,
    "fibre": 1
  },
  {
    "name": "Samosa (1 medium)",
    "calories": 260,
    "protein": 5,
    "carbs": 32,
    "fat": 13,
    "fibre": 4
  },
  {
    "name": "Kachori (1 medium)",
    "calories": 220,
    "protein": 5,
    "carbs": 26,
    "fat": 11,
    "fibre": 3
  },
  {
    "name": "Dhokla (1 piece)",
    "calories": 60,
    "protein": 2.5,
    "carbs": 9,
    "fat": 1.5,
    "fibre": 1
  },
  {
    "name": "Idli podi (1 tbsp)",
    "calories": 45,
    "protein": 2,
    "carbs": 4,
    "fat": 2,
    "fibre": 1
  },
  {
    "name": "Roasted chana (30 g)",
    "calories": 120,
    "protein": 6,
    "carbs": 18,
    "fat": 2,
    "fibre": 5
  },
  {
    "name": "Makhana roasted (20 g)",
    "calories": 70,
    "protein": 2.5,
    "carbs": 15,
    "fat": 0.5,
    "fibre": 2
  },
  {
    "name": "Murukku (30 g)",
    "calories": 160,
    "protein": 3,
    "carbs": 20,
    "fat": 8,
    "fibre": 1
  },
  {
    "name": "Bhel puri (1 cup)",
    "calories": 180,
    "protein": 4,
    "carbs": 30,
    "fat": 5,
    "fibre": 4
  },
  {
    "name": "Pav bhaji (1 plate)",
    "calories": 400,
    "protein": 9,
    "carbs": 55,
    "fat": 16,
    "fibre": 7
  },
  {
    "name": "Vada pav (1 piece)",
    "calories": 290,
    "protein": 6,
    "carbs": 40,
    "fat": 11,
    "fibre": 4
  },
  {
    "name": "French fries (100 g)",
    "calories": 312,
    "protein": 3.4,
    "carbs": 41,
    "fat": 15,
    "fibre": 3.8
  },
  {
    "name": "Orange (1 medium)",
    "calories": 62,
    "protein": 1.2,
    "carbs": 15.4,
    "fat": 0.2,
    "fibre": 3.1
  },
  {
    "name": "Guava (1 medium)",
    "calories": 68,
    "protein": 2.6,
    "carbs": 14,
    "fat": 1,
    "fibre": 5.4
  },
  {
    "name": "Papaya (1 cup)",
    "calories": 55,
    "protein": 0.9,
    "carbs": 14,
    "fat": 0.2,
    "fibre": 2.5
  },
  {
    "name": "Watermelon (1 cup)",
    "calories": 46,
    "protein": 0.9,
    "carbs": 11.5,
    "fat": 0.2,
    "fibre": 0.6
  },
  {
    "name": "Mango (1 cup)",
    "calories": 99,
    "protein": 1.4,
    "carbs": 25,
    "fat": 0.6,
    "fibre": 2.6
  },
  {
    "name": "Grapes (1 cup)",
    "calories": 104,
    "protein": 1.1,
    "carbs": 27,
    "fat": 0.2,
    "fibre": 1.4
  },
  {
    "name": "Pomegranate arils (1/2 cup)",
    "calories": 72,
    "protein": 1.5,
    "carbs": 16,
    "fat": 1,
    "fibre": 3.5
  },
  {
    "name": "Dates (2 pieces)",
    "calories": 133,
    "protein": 1.1,
    "carbs": 36,
    "fat": 0.1,
    "fibre": 3.2
  },
  {
    "name": "Raisins (20 g)",
    "calories": 60,
    "protein": 0.6,
    "carbs": 16,
    "fat": 0.1,
    "fibre": 0.8
  },
  {
    "name": "Buttermilk / chaas (1 glass)",
    "calories": 60,
    "protein": 3,
    "carbs": 6,
    "fat": 2,
    "fibre": 0
  },
  {
    "name": "Lassi sweetened (1 glass)",
    "calories": 190,
    "protein": 6,
    "carbs": 30,
    "fat": 5,
    "fibre": 0
  },
  {
    "name": "Greek yogurt plain (100 g)",
    "calories": 97,
    "protein": 9,
    "carbs": 3.9,
    "fat": 5,
    "fibre": 0
  },
  {
    "name": "Cheese (1 slice, 20 g)",
    "calories": 70,
    "protein": 4,
    "carbs": 0.5,
    "fat": 6,
    "fibre": 0
  },
  {
    "name": "Tofu (100 g)",
    "calories": 76,
    "protein": 8,
    "carbs": 1.9,
    "fat": 4.8,
    "fibre": 0.3
  },
  {
    "name": "Soy milk unsweetened (1 cup)",
    "calories": 80,
    "protein": 7,
    "carbs": 4,
    "fat": 4,
    "fibre": 1
  },
  {
    "name": "Whey/plant protein shake (1 serving)",
    "calories": 143,
    "protein": 12,
    "carbs": 0,
    "fat": 0,
    "fibre": 0
  },
  {
    "name": "Boiled egg white (1)",
    "calories": 17,
    "protein": 3.6,
    "carbs": 0.2,
    "fat": 0.1,
    "fibre": 0
  },
  {
    "name": "Omelette (2 eggs)",
    "calories": 190,
    "protein": 13,
    "carbs": 2,
    "fat": 14,
    "fibre": 0
  },
  {
    "name": "Chicken breast cooked (100 g)",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "fibre": 0
  },
  {
    "name": "Fish cooked (100 g)",
    "calories": 150,
    "protein": 24,
    "carbs": 0,
    "fat": 5,
    "fibre": 0
  },
  {
    "name": "Egg curry (1 cup)",
    "calories": 230,
    "protein": 13,
    "carbs": 10,
    "fat": 15,
    "fibre": 2
  },
  {
    "name": "Chicken tikka (100 g)",
    "calories": 180,
    "protein": 27,
    "carbs": 4,
    "fat": 6,
    "fibre": 1
  },
  {
    "name": "Fish curry (1 cup)",
    "calories": 220,
    "protein": 22,
    "carbs": 8,
    "fat": 10,
    "fibre": 2
  },
  {
    "name": "Prawns cooked (100 g)",
    "calories": 99,
    "protein": 24,
    "carbs": 0.2,
    "fat": 0.3,
    "fibre": 0
  },
  {
    "name": "Oats porridge with milk (1 cup)",
    "calories": 220,
    "protein": 9,
    "carbs": 32,
    "fat": 6,
    "fibre": 4
  },
  {
    "name": "Cornflakes with milk (1 bowl)",
    "calories": 210,
    "protein": 7,
    "carbs": 38,
    "fat": 4,
    "fibre": 2
  },
  {
    "name": "Sprouts salad (1 cup)",
    "calories": 100,
    "protein": 7,
    "carbs": 18,
    "fat": 1,
    "fibre": 6
  },
  {
    "name": "Fruit salad (1 cup)",
    "calories": 100,
    "protein": 1.5,
    "carbs": 25,
    "fat": 0.5,
    "fibre": 4
  },
  {
    "name": "Vegetable soup (1 cup)",
    "calories": 80,
    "protein": 3,
    "carbs": 12,
    "fat": 2,
    "fibre": 3
  },
  {
    "name": "Tomato soup (1 cup)",
    "calories": 90,
    "protein": 2,
    "carbs": 15,
    "fat": 2,
    "fibre": 2
  },
  {
    "name": "Tea with milk and sugar (1 cup)",
    "calories": 70,
    "protein": 2,
    "carbs": 10,
    "fat": 2,
    "fibre": 0
  },
  {
    "name": "Black tea without sugar (1 cup)",
    "calories": 2,
    "protein": 0,
    "carbs": 0.5,
    "fat": 0,
    "fibre": 0
  },
  {
    "name": "Coffee with milk and sugar (1 cup)",
    "calories": 90,
    "protein": 3,
    "carbs": 14,
    "fat": 2.5,
    "fibre": 0
  },
  {
    "name": "Coconut water (1 glass)",
    "calories": 45,
    "protein": 1.7,
    "carbs": 9,
    "fat": 0.5,
    "fibre": 2.6
  },
  {
    "name": "Lemon water unsweetened (1 glass)",
    "calories": 8,
    "protein": 0.2,
    "carbs": 2.5,
    "fat": 0,
    "fibre": 0.1
  },
  {
    "name": "Dark chocolate (20 g)",
    "calories": 110,
    "protein": 1.5,
    "carbs": 12,
    "fat": 7,
    "fibre": 2
  },
  {
    "name": "Biscuit/Marie (2 pieces)",
    "calories": 54,
    "protein": 1,
    "carbs": 9,
    "fat": 1.5,
    "fibre": 0.3
  },
  {
    "name": "Bread whole wheat (1 slice)",
    "calories": 75,
    "protein": 3.5,
    "carbs": 13,
    "fat": 1.2,
    "fibre": 2
  },
  {
    "name": "Peanut butter (1 tbsp)",
    "calories": 95,
    "protein": 3.5,
    "carbs": 3.5,
    "fat": 8,
    "fibre": 1
  },
  {
    "name": "Chia seeds (1 tbsp)",
    "calories": 58,
    "protein": 2,
    "carbs": 5,
    "fat": 3.7,
    "fibre": 4.1
  },
  {
    "name": "Flaxseed ground (1 tbsp)",
    "calories": 37,
    "protein": 1.3,
    "carbs": 2,
    "fat": 3,
    "fibre": 1.9
  },
  {
    "name": "Walnuts (15 g)",
    "calories": 98,
    "protein": 2.3,
    "carbs": 2.1,
    "fat": 9.8,
    "fibre": 1
  },
  {
    "name": "Ghee (1 tsp)",
    "calories": 45,
    "protein": 0,
    "carbs": 0,
    "fat": 5,
    "fibre": 0
  },
  {
    "name": "Cooking oil (1 tsp)",
    "calories": 40,
    "protein": 0,
    "carbs": 0,
    "fat": 4.5,
    "fibre": 0
  },
  {
    "name": "Sugar (1 tsp)",
    "calories": 16,
    "protein": 0,
    "carbs": 4,
    "fat": 0,
    "fibre": 0
  },
  {
    "name": "Jaggery (10 g)",
    "calories": 38,
    "protein": 0,
    "carbs": 9.8,
    "fat": 0,
    "fibre": 0
  },
  {
    "name": "Besan (100 g dry)",
    "calories": 387,
    "protein": 22,
    "carbs": 58,
    "fat": 7,
    "fibre": 11
  },
  {
    "name": "Atta whole wheat (100 g dry)",
    "calories": 340,
    "protein": 13,
    "carbs": 72,
    "fat": 2.5,
    "fibre": 10.7
  },
  {
    "name": "Soya chunks dry (30 g)",
    "calories": 104,
    "protein": 15.6,
    "carbs": 9,
    "fat": 0.2,
    "fibre": 4.5
  },
  {
    "name": "Chickpeas boiled (100 g)",
    "calories": 164,
    "protein": 8.9,
    "carbs": 27.4,
    "fat": 2.6,
    "fibre": 7.6
  },
  {
    "name": "Lentils boiled (100 g)",
    "calories": 116,
    "protein": 9,
    "carbs": 20,
    "fat": 0.4,
    "fibre": 7.9
  },
  {
    "name": "Sweet potato boiled (100 g)",
    "calories": 76,
    "protein": 1.4,
    "carbs": 17.7,
    "fat": 0.1,
    "fibre": 2.5
  },
  {
    "name": "Potato boiled (100 g)",
    "calories": 87,
    "protein": 1.9,
    "carbs": 20.1,
    "fat": 0.1,
    "fibre": 1.8
  },
  {
    "name": "Cucumber (100 g)",
    "calories": 15,
    "protein": 0.7,
    "carbs": 3.6,
    "fat": 0.1,
    "fibre": 0.5
  },
  {
    "name": "Tomato (100 g)",
    "calories": 18,
    "protein": 0.9,
    "carbs": 3.9,
    "fat": 0.2,
    "fibre": 1.2
  },
  {
    "name": "Carrot (100 g)",
    "calories": 41,
    "protein": 0.9,
    "carbs": 9.6,
    "fat": 0.2,
    "fibre": 2.8
  },
  {
    "name": "Spinach cooked (1 cup)",
    "calories": 41,
    "protein": 5.3,
    "carbs": 6.8,
    "fat": 0.5,
    "fibre": 4.3
  },
  {
    "name": "Broccoli cooked (1 cup)",
    "calories": 55,
    "protein": 3.7,
    "carbs": 11.2,
    "fat": 0.6,
    "fibre": 5.1
  },
  {
    "name": "Mushroom cooked (1 cup)",
    "calories": 44,
    "protein": 3.5,
    "carbs": 8.1,
    "fat": 0.4,
    "fibre": 3.4
  },
  {
    "name": "Corn boiled (1 cup)",
    "calories": 143,
    "protein": 5.1,
    "carbs": 31.3,
    "fat": 2.2,
    "fibre": 3.6
  },
  {
    "name": "Pasta cooked (1 cup)",
    "calories": 220,
    "protein": 8,
    "carbs": 43,
    "fat": 1.3,
    "fibre": 2.5
  },
  {
    "name": "Noodles cooked (1 cup)",
    "calories": 220,
    "protein": 7,
    "carbs": 40,
    "fat": 4,
    "fibre": 2
  },
  {
    "name": "Pizza (1 slice)",
    "calories": 285,
    "protein": 12,
    "carbs": 36,
    "fat": 10,
    "fibre": 2
  },
  {
    "name": "Burger veg (1 piece)",
    "calories": 350,
    "protein": 9,
    "carbs": 48,
    "fat": 13,
    "fibre": 5
  },
  {
    "name": "Instant noodles (1 pack prepared)",
    "calories": 350,
    "protein": 8,
    "carbs": 48,
    "fat": 14,
    "fibre": 3
  },
  {
    "name": "Gulab jamun (1 piece)",
    "calories": 150,
    "protein": 2,
    "carbs": 22,
    "fat": 6,
    "fibre": 0.5
  },
  {
    "name": "Rasgulla (1 piece)",
    "calories": 120,
    "protein": 3,
    "carbs": 24,
    "fat": 1,
    "fibre": 0
  },
  {
    "name": "Kheer (1/2 cup)",
    "calories": 160,
    "protein": 4,
    "carbs": 25,
    "fat": 5,
    "fibre": 0.5
  },
  {
    "name": "Jalebi (1 piece, 25 g)",
    "calories": 110,
    "protein": 1,
    "carbs": 18,
    "fat": 4,
    "fibre": 0.2
  },
  {
    "name": "Ladoo besan (1 medium)",
    "calories": 180,
    "protein": 4,
    "carbs": 22,
    "fat": 9,
    "fibre": 2
  },
  {
    "name": "Halwa sooji (1/2 cup)",
    "calories": 220,
    "protein": 3,
    "carbs": 32,
    "fat": 9,
    "fibre": 1
  },
  {
    "name": "Ice cream vanilla (1/2 cup)",
    "calories": 137,
    "protein": 2.3,
    "carbs": 16,
    "fat": 7,
    "fibre": 0.5
  },
  {
    "name": "Ragi dosa (1 medium)",
    "calories": 145,
    "protein": 3.5,
    "carbs": 24,
    "fat": 4,
    "fibre": 2.5
  },
  {
    "name": "Ragi mudde (1 ball, 150 g)",
    "calories": 170,
    "protein": 3.5,
    "carbs": 36,
    "fat": 1,
    "fibre": 4
  },
  {
    "name": "Ragi porridge (1 cup)",
    "calories": 160,
    "protein": 5,
    "carbs": 29,
    "fat": 3,
    "fibre": 3
  },
  {
    "name": "Set dosa (1 piece)",
    "calories": 120,
    "protein": 2.5,
    "carbs": 20,
    "fat": 3.5,
    "fibre": 1
  },
  {
    "name": "Neer dosa (1 medium)",
    "calories": 90,
    "protein": 1.5,
    "carbs": 18,
    "fat": 1.5,
    "fibre": 0.5
  },
  {
    "name": "Pesarattu (1 medium)",
    "calories": 150,
    "protein": 8,
    "carbs": 22,
    "fat": 4,
    "fibre": 4
  },
  {
    "name": "Adai dosa (1 medium)",
    "calories": 190,
    "protein": 9,
    "carbs": 27,
    "fat": 6,
    "fibre": 5
  },
  {
    "name": "Appam (1 medium)",
    "calories": 120,
    "protein": 2,
    "carbs": 24,
    "fat": 2,
    "fibre": 1
  },
  {
    "name": "Puttu (1 cup)",
    "calories": 230,
    "protein": 4,
    "carbs": 48,
    "fat": 3,
    "fibre": 3
  },
  {
    "name": "Vegetable semiya upma (1 cup)",
    "calories": 220,
    "protein": 5,
    "carbs": 35,
    "fat": 7,
    "fibre": 3
  },
  {
    "name": "Sabudana khichdi (1 cup)",
    "calories": 310,
    "protein": 4,
    "carbs": 47,
    "fat": 12,
    "fibre": 2
  },
  {
    "name": "Sattu drink unsweetened (1 glass)",
    "calories": 140,
    "protein": 8,
    "carbs": 22,
    "fat": 2,
    "fibre": 5
  },
  {
    "name": "Sattu paratha (1 medium)",
    "calories": 230,
    "protein": 9,
    "carbs": 34,
    "fat": 7,
    "fibre": 6
  },
  {
    "name": "Methi paratha (1 medium)",
    "calories": 180,
    "protein": 5,
    "carbs": 28,
    "fat": 6,
    "fibre": 4
  },
  {
    "name": "Gobi paratha (1 medium)",
    "calories": 210,
    "protein": 6,
    "carbs": 32,
    "fat": 7,
    "fibre": 4
  },
  {
    "name": "Mooli paratha (1 medium)",
    "calories": 195,
    "protein": 5,
    "carbs": 30,
    "fat": 6,
    "fibre": 4
  },
  {
    "name": "Missi roti (1 medium)",
    "calories": 150,
    "protein": 6,
    "carbs": 22,
    "fat": 4,
    "fibre": 4
  },
  {
    "name": "Jowar roti (1 medium)",
    "calories": 120,
    "protein": 3,
    "carbs": 25,
    "fat": 1,
    "fibre": 3
  },
  {
    "name": "Bajra roti (1 medium)",
    "calories": 140,
    "protein": 4,
    "carbs": 27,
    "fat": 2,
    "fibre": 4
  },
  {
    "name": "Makki roti (1 medium)",
    "calories": 170,
    "protein": 4,
    "carbs": 32,
    "fat": 3,
    "fibre": 3
  },
  {
    "name": "Multigrain roti (1 medium)",
    "calories": 120,
    "protein": 4,
    "carbs": 20,
    "fat": 3,
    "fibre": 3
  },
  {
    "name": "Phulka without oil (1 medium)",
    "calories": 90,
    "protein": 3,
    "carbs": 18,
    "fat": 0.5,
    "fibre": 2.5
  },
  {
    "name": "Lachha paratha (1 medium)",
    "calories": 260,
    "protein": 5,
    "carbs": 32,
    "fat": 12,
    "fibre": 2
  },
  {
    "name": "Naan plain (1 medium)",
    "calories": 260,
    "protein": 8,
    "carbs": 45,
    "fat": 5,
    "fibre": 2
  },
  {
    "name": "Butter naan (1 medium)",
    "calories": 310,
    "protein": 8,
    "carbs": 46,
    "fat": 10,
    "fibre": 2
  },
  {
    "name": "Kulcha plain (1 medium)",
    "calories": 240,
    "protein": 7,
    "carbs": 42,
    "fat": 5,
    "fibre": 2
  },
  {
    "name": "Vegetable stuffed sandwich (1)",
    "calories": 240,
    "protein": 8,
    "carbs": 36,
    "fat": 7,
    "fibre": 5
  },
  {
    "name": "Paneer sandwich (1)",
    "calories": 320,
    "protein": 16,
    "carbs": 32,
    "fat": 14,
    "fibre": 4
  },
  {
    "name": "Vegetable dalia (1 cup)",
    "calories": 180,
    "protein": 6,
    "carbs": 33,
    "fat": 3,
    "fibre": 5
  },
  {
    "name": "Dalia porridge with milk (1 cup)",
    "calories": 200,
    "protein": 8,
    "carbs": 34,
    "fat": 4,
    "fibre": 4
  },
  {
    "name": "Oats cooked in water (1 cup)",
    "calories": 155,
    "protein": 6,
    "carbs": 27,
    "fat": 3,
    "fibre": 4
  },
  {
    "name": "Masala oats (1 cup)",
    "calories": 210,
    "protein": 7,
    "carbs": 32,
    "fat": 6,
    "fibre": 5
  },
  {
    "name": "Quinoa cooked (1 cup)",
    "calories": 222,
    "protein": 8,
    "carbs": 39,
    "fat": 4,
    "fibre": 5
  },
  {
    "name": "Brown rice cooked (1 cup)",
    "calories": 216,
    "protein": 5,
    "carbs": 45,
    "fat": 2,
    "fibre": 3.5
  },
  {
    "name": "Red rice cooked (1 cup)",
    "calories": 210,
    "protein": 4,
    "carbs": 45,
    "fat": 1,
    "fibre": 2
  },
  {
    "name": "Millet khichdi (1 cup)",
    "calories": 220,
    "protein": 7,
    "carbs": 37,
    "fat": 5,
    "fibre": 5
  },
  {
    "name": "Vegetable fried rice (1 cup)",
    "calories": 280,
    "protein": 6,
    "carbs": 44,
    "fat": 9,
    "fibre": 3
  },
  {
    "name": "Egg fried rice (1 cup)",
    "calories": 320,
    "protein": 11,
    "carbs": 43,
    "fat": 11,
    "fibre": 2
  },
  {
    "name": "Paneer fried rice (1 cup)",
    "calories": 350,
    "protein": 14,
    "carbs": 43,
    "fat": 13,
    "fibre": 3
  },
  {
    "name": "Dal makhani (1 cup)",
    "calories": 300,
    "protein": 13,
    "carbs": 32,
    "fat": 14,
    "fibre": 10
  },
  {
    "name": "Dal palak (1 cup)",
    "calories": 190,
    "protein": 11,
    "carbs": 27,
    "fat": 5,
    "fibre": 8
  },
  {
    "name": "Chana dal cooked (1 cup)",
    "calories": 240,
    "protein": 13,
    "carbs": 38,
    "fat": 4,
    "fibre": 10
  },
  {
    "name": "Urad dal cooked (1 cup)",
    "calories": 220,
    "protein": 12,
    "carbs": 32,
    "fat": 5,
    "fibre": 9
  },
  {
    "name": "Lobia curry (1 cup)",
    "calories": 225,
    "protein": 12,
    "carbs": 34,
    "fat": 5,
    "fibre": 10
  },
  {
    "name": "Whole moong curry (1 cup)",
    "calories": 220,
    "protein": 13,
    "carbs": 34,
    "fat": 4,
    "fibre": 10
  },
  {
    "name": "Sprouted moong boiled (100 g)",
    "calories": 105,
    "protein": 8,
    "carbs": 18,
    "fat": 1,
    "fibre": 5
  },
  {
    "name": "Sprouted moong chaat (1 cup)",
    "calories": 180,
    "protein": 10,
    "carbs": 28,
    "fat": 3,
    "fibre": 7
  },
  {
    "name": "Chana chaat (1 cup)",
    "calories": 230,
    "protein": 11,
    "carbs": 34,
    "fat": 6,
    "fibre": 9
  },
  {
    "name": "Chole kulche (1 plate)",
    "calories": 510,
    "protein": 17,
    "carbs": 77,
    "fat": 16,
    "fibre": 12
  },
  {
    "name": "Aloo matar (1 cup)",
    "calories": 210,
    "protein": 5,
    "carbs": 30,
    "fat": 8,
    "fibre": 5
  },
  {
    "name": "Baingan bharta (1 cup)",
    "calories": 160,
    "protein": 3,
    "carbs": 18,
    "fat": 9,
    "fibre": 6
  },
  {
    "name": "Lauki sabzi (1 cup)",
    "calories": 95,
    "protein": 2,
    "carbs": 12,
    "fat": 5,
    "fibre": 3
  },
  {
    "name": "Lauki chana dal (1 cup)",
    "calories": 175,
    "protein": 8,
    "carbs": 24,
    "fat": 6,
    "fibre": 6
  },
  {
    "name": "Turai sabzi (1 cup)",
    "calories": 100,
    "protein": 2,
    "carbs": 13,
    "fat": 5,
    "fibre": 3
  },
  {
    "name": "Tinda sabzi (1 cup)",
    "calories": 110,
    "protein": 2,
    "carbs": 14,
    "fat": 6,
    "fibre": 3
  },
  {
    "name": "Cabbage sabzi (1 cup)",
    "calories": 120,
    "protein": 3,
    "carbs": 14,
    "fat": 6,
    "fibre": 5
  },
  {
    "name": "Cabbage peas sabzi (1 cup)",
    "calories": 150,
    "protein": 5,
    "carbs": 20,
    "fat": 6,
    "fibre": 6
  },
  {
    "name": "Beans sabzi (1 cup)",
    "calories": 125,
    "protein": 4,
    "carbs": 17,
    "fat": 5,
    "fibre": 5
  },
  {
    "name": "Carrot peas sabzi (1 cup)",
    "calories": 145,
    "protein": 4,
    "carbs": 20,
    "fat": 6,
    "fibre": 5
  },
  {
    "name": "Mushroom masala (1 cup)",
    "calories": 180,
    "protein": 7,
    "carbs": 16,
    "fat": 10,
    "fibre": 4
  },
  {
    "name": "Paneer bhurji (1 cup)",
    "calories": 310,
    "protein": 19,
    "carbs": 11,
    "fat": 22,
    "fibre": 2
  },
  {
    "name": "Egg bhurji (2 eggs)",
    "calories": 210,
    "protein": 13,
    "carbs": 5,
    "fat": 15,
    "fibre": 1
  },
  {
    "name": "Tofu bhurji (1 cup)",
    "calories": 190,
    "protein": 16,
    "carbs": 10,
    "fat": 10,
    "fibre": 3
  },
  {
    "name": "Soya bhurji (1 cup)",
    "calories": 210,
    "protein": 20,
    "carbs": 15,
    "fat": 7,
    "fibre": 7
  },
  {
    "name": "Palak tofu (1 cup)",
    "calories": 210,
    "protein": 14,
    "carbs": 15,
    "fat": 11,
    "fibre": 5
  },
  {
    "name": "Vegetable raita (1 cup)",
    "calories": 150,
    "protein": 8,
    "carbs": 13,
    "fat": 7,
    "fibre": 2
  },
  {
    "name": "Boondi raita (1 cup)",
    "calories": 210,
    "protein": 8,
    "carbs": 18,
    "fat": 12,
    "fibre": 1
  },
  {
    "name": "Cucumber raita (1 cup)",
    "calories": 125,
    "protein": 7,
    "carbs": 10,
    "fat": 6,
    "fibre": 1
  },
  {
    "name": "Plain low-fat curd (100 g)",
    "calories": 65,
    "protein": 4,
    "carbs": 5,
    "fat": 3,
    "fibre": 0
  },
  {
    "name": "Skyr plain (100 g)",
    "calories": 65,
    "protein": 11,
    "carbs": 4,
    "fat": 0.3,
    "fibre": 0
  },
  {
    "name": "Low-fat milk (1 cup)",
    "calories": 105,
    "protein": 8,
    "carbs": 12,
    "fat": 2.5,
    "fibre": 0
  },
  {
    "name": "Unsweetened almond milk (1 cup)",
    "calories": 35,
    "protein": 1,
    "carbs": 2,
    "fat": 2.5,
    "fibre": 0.5
  },
  {
    "name": "Homemade paneer low-fat (100 g)",
    "calories": 165,
    "protein": 20,
    "carbs": 4,
    "fat": 8,
    "fibre": 0
  },
  {
    "name": "Egg scrambled (2 eggs)",
    "calories": 195,
    "protein": 13,
    "carbs": 2,
    "fat": 15,
    "fibre": 0
  },
  {
    "name": "Egg white omelette (3 whites)",
    "calories": 65,
    "protein": 11,
    "carbs": 2,
    "fat": 1,
    "fibre": 0
  },
  {
    "name": "Grilled fish (100 g)",
    "calories": 145,
    "protein": 25,
    "carbs": 0,
    "fat": 5,
    "fibre": 0
  },
  {
    "name": "Fish fry (100 g)",
    "calories": 240,
    "protein": 22,
    "carbs": 10,
    "fat": 13,
    "fibre": 1
  },
  {
    "name": "Chicken stew (1 cup)",
    "calories": 230,
    "protein": 25,
    "carbs": 10,
    "fat": 9,
    "fibre": 2
  },
  {
    "name": "Chicken soup (1 cup)",
    "calories": 110,
    "protein": 12,
    "carbs": 7,
    "fat": 4,
    "fibre": 1
  },
  {
    "name": "Mutton curry (1 cup)",
    "calories": 360,
    "protein": 24,
    "carbs": 9,
    "fat": 25,
    "fibre": 2
  },
  {
    "name": "Prawn curry (1 cup)",
    "calories": 230,
    "protein": 23,
    "carbs": 9,
    "fat": 11,
    "fibre": 2
  },
  {
    "name": "Tandoori chicken (100 g)",
    "calories": 180,
    "protein": 26,
    "carbs": 4,
    "fat": 6,
    "fibre": 0
  },
  {
    "name": "Roasted makhana with ghee (30 g)",
    "calories": 160,
    "protein": 4,
    "carbs": 22,
    "fat": 7,
    "fibre": 3
  },
  {
    "name": "Roasted peanuts (20 g)",
    "calories": 115,
    "protein": 5,
    "carbs": 4,
    "fat": 9,
    "fibre": 2
  },
  {
    "name": "Mixed nuts (30 g)",
    "calories": 180,
    "protein": 5,
    "carbs": 7,
    "fat": 16,
    "fibre": 3
  },
  {
    "name": "Pumpkin seeds (20 g)",
    "calories": 112,
    "protein": 6,
    "carbs": 3,
    "fat": 9,
    "fibre": 1
  },
  {
    "name": "Sunflower seeds (20 g)",
    "calories": 117,
    "protein": 4,
    "carbs": 4,
    "fat": 10,
    "fibre": 2
  },
  {
    "name": "Sesame seeds (1 tbsp)",
    "calories": 52,
    "protein": 1.6,
    "carbs": 2,
    "fat": 4.5,
    "fibre": 1.1
  },
  {
    "name": "Chikki peanut (30 g)",
    "calories": 155,
    "protein": 5,
    "carbs": 17,
    "fat": 8,
    "fibre": 2
  },
  {
    "name": "Til ladoo (1 medium)",
    "calories": 155,
    "protein": 4,
    "carbs": 18,
    "fat": 8,
    "fibre": 2
  },
  {
    "name": "Dahi vada (2 pieces)",
    "calories": 280,
    "protein": 10,
    "carbs": 36,
    "fat": 11,
    "fibre": 3
  },
  {
    "name": "Pani puri (6 pieces)",
    "calories": 210,
    "protein": 5,
    "carbs": 38,
    "fat": 5,
    "fibre": 4
  },
  {
    "name": "Sev puri (1 plate)",
    "calories": 330,
    "protein": 7,
    "carbs": 45,
    "fat": 14,
    "fibre": 5
  },
  {
    "name": "Aloo tikki (1 medium)",
    "calories": 170,
    "protein": 3,
    "carbs": 24,
    "fat": 7,
    "fibre": 3
  },
  {
    "name": "Vegetable cutlet (1 medium)",
    "calories": 150,
    "protein": 3,
    "carbs": 20,
    "fat": 7,
    "fibre": 3
  },
  {
    "name": "Bread pakora (1 piece)",
    "calories": 280,
    "protein": 7,
    "carbs": 33,
    "fat": 14,
    "fibre": 3
  },
  {
    "name": "Onion pakora (100 g)",
    "calories": 290,
    "protein": 6,
    "carbs": 29,
    "fat": 17,
    "fibre": 4
  },
  {
    "name": "Medu vada (1 medium)",
    "calories": 160,
    "protein": 5,
    "carbs": 18,
    "fat": 8,
    "fibre": 3
  },
  {
    "name": "Dal vada (1 medium)",
    "calories": 150,
    "protein": 6,
    "carbs": 18,
    "fat": 6,
    "fibre": 4
  },
  {
    "name": "Mysore bonda (1 medium)",
    "calories": 170,
    "protein": 4,
    "carbs": 20,
    "fat": 9,
    "fibre": 2
  },
  {
    "name": "Vegetable momos steamed (6)",
    "calories": 230,
    "protein": 7,
    "carbs": 38,
    "fat": 6,
    "fibre": 3
  },
  {
    "name": "Paneer momos steamed (6)",
    "calories": 300,
    "protein": 14,
    "carbs": 34,
    "fat": 12,
    "fibre": 3
  },
  {
    "name": "Sweet corn chaat (1 cup)",
    "calories": 170,
    "protein": 5,
    "carbs": 32,
    "fat": 3,
    "fibre": 4
  },
  {
    "name": "Boiled black chana (100 g)",
    "calories": 164,
    "protein": 9,
    "carbs": 27,
    "fat": 3,
    "fibre": 8
  },
  {
    "name": "Boiled soybean (100 g)",
    "calories": 170,
    "protein": 17,
    "carbs": 10,
    "fat": 9,
    "fibre": 6
  },
  {
    "name": "Pav plain (1 piece)",
    "calories": 135,
    "protein": 4,
    "carbs": 26,
    "fat": 2,
    "fibre": 1
  },
  {
    "name": "Bread white (1 slice)",
    "calories": 80,
    "protein": 3,
    "carbs": 15,
    "fat": 1,
    "fibre": 1
  },
  {
    "name": "Whole wheat toast (2 slices)",
    "calories": 160,
    "protein": 6,
    "carbs": 28,
    "fat": 2,
    "fibre": 4
  },
  {
    "name": "Hummus (2 tbsp)",
    "calories": 70,
    "protein": 2,
    "carbs": 5,
    "fat": 5,
    "fibre": 2
  },
  {
    "name": "Coconut pieces fresh (30 g)",
    "calories": 105,
    "protein": 1,
    "carbs": 4,
    "fat": 10,
    "fibre": 3
  },
  {
    "name": "Amla fresh (100 g)",
    "calories": 44,
    "protein": 1,
    "carbs": 10,
    "fat": 0.6,
    "fibre": 4
  },
  {
    "name": "Pear (1 medium)",
    "calories": 100,
    "protein": 1,
    "carbs": 27,
    "fat": 0.2,
    "fibre": 5.5
  },
  {
    "name": "Kiwi (1 medium)",
    "calories": 42,
    "protein": 0.8,
    "carbs": 10,
    "fat": 0.4,
    "fibre": 2
  },
  {
    "name": "Pineapple (1 cup)",
    "calories": 82,
    "protein": 1,
    "carbs": 22,
    "fat": 0.2,
    "fibre": 2.3
  },
  {
    "name": "Strawberries (1 cup)",
    "calories": 50,
    "protein": 1,
    "carbs": 12,
    "fat": 0.5,
    "fibre": 3
  },
  {
    "name": "Muskmelon (1 cup)",
    "calories": 54,
    "protein": 1.3,
    "carbs": 13,
    "fat": 0.3,
    "fibre": 1.4
  },
  {
    "name": "Sapota chikoo (1 medium)",
    "calories": 120,
    "protein": 0.6,
    "carbs": 30,
    "fat": 1,
    "fibre": 5
  },
  {
    "name": "Custard apple (100 g)",
    "calories": 94,
    "protein": 2,
    "carbs": 24,
    "fat": 0.3,
    "fibre": 4.4
  },
  {
    "name": "Fig fresh (2 medium)",
    "calories": 74,
    "protein": 0.8,
    "carbs": 19,
    "fat": 0.3,
    "fibre": 3
  },
  {
    "name": "Dried figs (2 pieces)",
    "calories": 85,
    "protein": 1,
    "carbs": 22,
    "fat": 0.3,
    "fibre": 3
  },
  {
    "name": "Munakka raisins (20 g)",
    "calories": 60,
    "protein": 0.6,
    "carbs": 16,
    "fat": 0.1,
    "fibre": 1
  },
  {
    "name": "Tender coconut malai (50 g)",
    "calories": 90,
    "protein": 1,
    "carbs": 4,
    "fat": 8,
    "fibre": 2
  },
  {
    "name": "Sugarcane juice (1 glass)",
    "calories": 180,
    "protein": 0,
    "carbs": 44,
    "fat": 0,
    "fibre": 0
  },
  {
    "name": "Masala chai without sugar (1 cup)",
    "calories": 45,
    "protein": 2,
    "carbs": 4,
    "fat": 2,
    "fibre": 0
  },
  {
    "name": "Filter coffee with milk (1 cup)",
    "calories": 90,
    "protein": 3,
    "carbs": 12,
    "fat": 3,
    "fibre": 0
  },
  {
    "name": "Turmeric milk (1 cup)",
    "calories": 145,
    "protein": 8,
    "carbs": 15,
    "fat": 6,
    "fibre": 0
  },
  {
    "name": "Sattu drink sweetened (1 glass)",
    "calories": 200,
    "protein": 8,
    "carbs": 37,
    "fat": 2,
    "fibre": 5
  },
  {
    "name": "Vegetable clear soup (1 cup)",
    "calories": 65,
    "protein": 2,
    "carbs": 10,
    "fat": 2,
    "fibre": 2
  },
  {
    "name": "Palak soup (1 cup)",
    "calories": 90,
    "protein": 4,
    "carbs": 12,
    "fat": 3,
    "fibre": 3
  },
  {
    "name": "Moong dal soup (1 cup)",
    "calories": 130,
    "protein": 8,
    "carbs": 20,
    "fat": 2,
    "fibre": 5
  },
  {
    "name": "Kadhi pakora (1 cup)",
    "calories": 260,
    "protein": 9,
    "carbs": 24,
    "fat": 14,
    "fibre": 3
  },
  {
    "name": "Gajar halwa (1/2 cup)",
    "calories": 240,
    "protein": 5,
    "carbs": 32,
    "fat": 10,
    "fibre": 2
  },
  {
    "name": "Rice payasam (1/2 cup)",
    "calories": 210,
    "protein": 5,
    "carbs": 35,
    "fat": 6,
    "fibre": 0.5
  },
  {
    "name": "Sandesh (1 piece)",
    "calories": 130,
    "protein": 6,
    "carbs": 18,
    "fat": 4,
    "fibre": 0
  },
  {
    "name": "Shrikhand (1/2 cup)",
    "calories": 250,
    "protein": 7,
    "carbs": 35,
    "fat": 10,
    "fibre": 0
  },
  {
    "name": "Modak steamed (1 piece)",
    "calories": 110,
    "protein": 2,
    "carbs": 22,
    "fat": 2,
    "fibre": 1
  },
  {
    "name": "Malpua (1 piece)",
    "calories": 280,
    "protein": 5,
    "carbs": 40,
    "fat": 11,
    "fibre": 1
  },
  {
    "name": "Rabri (1/2 cup)",
    "calories": 240,
    "protein": 8,
    "carbs": 25,
    "fat": 12,
    "fibre": 0
  },
  {
    "name": "Coconut ladoo (1 medium)",
    "calories": 145,
    "protein": 2,
    "carbs": 18,
    "fat": 8,
    "fibre": 2
  },
  {
    "name": "Sooji toast (1 slice)",
    "calories": 170,
    "protein": 5,
    "carbs": 25,
    "fat": 6,
    "fibre": 2
  },
  {
    "name": "Vegetable cheela (1 medium)",
    "calories": 160,
    "protein": 6,
    "carbs": 23,
    "fat": 5,
    "fibre": 4
  },
  {
    "name": "Egg dosa (1 medium)",
    "calories": 220,
    "protein": 10,
    "carbs": 21,
    "fat": 10,
    "fibre": 1
  },
  {
    "name": "Paneer tikka (100 g)",
    "calories": 210,
    "protein": 17,
    "carbs": 7,
    "fat": 13,
    "fibre": 1
  },
  {
    "name": "Tandoori soya chaap (100 g)",
    "calories": 230,
    "protein": 16,
    "carbs": 11,
    "fat": 13,
    "fibre": 3
  },
  {
    "name": "Roasted sweet potato chaat (1 cup)",
    "calories": 185,
    "protein": 3,
    "carbs": 40,
    "fat": 2,
    "fibre": 6
  },
  {
    "name": "Avocado (100 g)",
    "calories": 160,
    "protein": 2,
    "carbs": 9,
    "fat": 15,
    "fibre": 7
  },
  {
    "name": "Beetroot boiled (100 g)",
    "calories": 44,
    "protein": 1.7,
    "carbs": 10,
    "fat": 0.2,
    "fibre": 2
  },
  {
    "name": "Cauliflower cooked (100 g)",
    "calories": 25,
    "protein": 2,
    "carbs": 5,
    "fat": 0.3,
    "fibre": 2
  },
  {
    "name": "Bottle gourd cooked (100 g)",
    "calories": 25,
    "protein": 1,
    "carbs": 5,
    "fat": 0.3,
    "fibre": 1
  },
  {
    "name": "Ridge gourd cooked (100 g)",
    "calories": 30,
    "protein": 1,
    "carbs": 6,
    "fat": 0.5,
    "fibre": 2
  },
  {
    "name": "Green beans cooked (100 g)",
    "calories": 35,
    "protein": 2,
    "carbs": 8,
    "fat": 0.2,
    "fibre": 3
  },
  {
    "name": "Fenugreek leaves cooked (100 g)",
    "calories": 60,
    "protein": 4,
    "carbs": 8,
    "fat": 2,
    "fibre": 5
  },
  {
    "name": "Amaranth leaves cooked (100 g)",
    "calories": 45,
    "protein": 4,
    "carbs": 7,
    "fat": 1,
    "fibre": 4
  },
  {
    "name": "Raw banana sabzi (1 cup)",
    "calories": 180,
    "protein": 3,
    "carbs": 30,
    "fat": 6,
    "fibre": 5
  },
  {
    "name": "Jackfruit curry (1 cup)",
    "calories": 210,
    "protein": 4,
    "carbs": 31,
    "fat": 8,
    "fibre": 5
  },
  {
    "name": "Vegetable poha with peanuts (1 cup)",
    "calories": 300,
    "protein": 8,
    "carbs": 43,
    "fat": 11,
    "fibre": 4
  },
  {
    "name": "Egg sandwich (1)",
    "calories": 290,
    "protein": 15,
    "carbs": 30,
    "fat": 12,
    "fibre": 3
  },
  {
    "name": "Paneer wrap (1 medium)",
    "calories": 380,
    "protein": 18,
    "carbs": 40,
    "fat": 17,
    "fibre": 5
  },
  {
    "name": "Chicken wrap (1 medium)",
    "calories": 360,
    "protein": 25,
    "carbs": 38,
    "fat": 12,
    "fibre": 4
  },
  {
    "name": "Roti with ghee (1 medium)",
    "calories": 155,
    "protein": 3.5,
    "carbs": 18,
    "fat": 8,
    "fibre": 3
  },
  {
    "name": "Rice kheer with jaggery (1/2 cup)",
    "calories": 220,
    "protein": 5,
    "carbs": 37,
    "fat": 6,
    "fibre": 1
  },
  {
    "name": "Vegetable oats khichdi (1 cup)",
    "calories": 220,
    "protein": 8,
    "carbs": 32,
    "fat": 7,
    "fibre": 6
  },
  {
    "name": "Besan toast (2 slices)",
    "calories": 280,
    "protein": 12,
    "carbs": 35,
    "fat": 10,
    "fibre": 6
  },
  {
    "name": "Chickpea salad (1 cup)",
    "calories": 210,
    "protein": 11,
    "carbs": 31,
    "fat": 5,
    "fibre": 9
  },
  {
    "name": "Grilled paneer (100 g)",
    "calories": 255,
    "protein": 19,
    "carbs": 4,
    "fat": 19,
    "fibre": 0
  },
  {
    "name": "Mixed dal (1 cup)",
    "calories": 205,
    "protein": 12,
    "carbs": 30,
    "fat": 5,
    "fibre": 9
  },
  {
    "name": "Ragi roti (1 medium)",
    "calories": 135,
    "protein": 3,
    "carbs": 27,
    "fat": 2,
    "fibre": 4
  },
  {
    "name": "Masala buttermilk (1 glass)",
    "calories": 65,
    "protein": 3,
    "carbs": 7,
    "fat": 3,
    "fibre": 0
  },
  {
    "name": "Coconut rice (1 cup)",
    "calories": 290,
    "protein": 5,
    "carbs": 41,
    "fat": 12,
    "fibre": 3
  },
  {
    "name": "Tamarind rice (1 cup)",
    "calories": 300,
    "protein": 6,
    "carbs": 48,
    "fat": 10,
    "fibre": 3
  },
  {
    "name": "Vegetable idli (1 medium)",
    "calories": 70,
    "protein": 2.5,
    "carbs": 13,
    "fat": 1,
    "fibre": 1
  },
  {
    "name": "Chana sundal (1 cup)",
    "calories": 240,
    "protein": 12,
    "carbs": 35,
    "fat": 7,
    "fibre": 9
  },
  {
    "name": "Kozhukattai savory (1 piece)",
    "calories": 95,
    "protein": 2,
    "carbs": 18,
    "fat": 2,
    "fibre": 1
  },
  {
    "name": "Ragi malt with milk (1 cup)",
    "calories": 190,
    "protein": 7,
    "carbs": 31,
    "fat": 4,
    "fibre": 3
  },
  {
    "name": "Beetroot sabzi (1 cup)",
    "calories": 120,
    "protein": 3,
    "carbs": 18,
    "fat": 5,
    "fibre": 4
  },
  {
    "name": "Pumpkin sabzi (1 cup)",
    "calories": 125,
    "protein": 2,
    "carbs": 20,
    "fat": 5,
    "fibre": 4
  },
  {
    "name": "Drumstick sambar (1 cup)",
    "calories": 145,
    "protein": 7,
    "carbs": 22,
    "fat": 3,
    "fibre": 5
  },
  {
    "name": "Horse gram kulthi dal (1 cup)",
    "calories": 200,
    "protein": 12,
    "carbs": 30,
    "fat": 4,
    "fibre": 9
  },
  {
    "name": "Methi dal (1 cup)",
    "calories": 190,
    "protein": 11,
    "carbs": 27,
    "fat": 5,
    "fibre": 8
  },
  {
    "name": "Masala egg curry (2 eggs)",
    "calories": 300,
    "protein": 16,
    "carbs": 12,
    "fat": 20,
    "fibre": 2
  },
  {
    "name": "Paneer curry homemade (1 cup)",
    "calories": 330,
    "protein": 19,
    "carbs": 14,
    "fat": 22,
    "fibre": 3
  },
  {
    "name": "Oats chilla (1 medium)",
    "calories": 165,
    "protein": 7,
    "carbs": 23,
    "fat": 5,
    "fibre": 4
  },
  {
    "name": "Peanut chutney (2 tbsp)",
    "calories": 110,
    "protein": 4,
    "carbs": 5,
    "fat": 9,
    "fibre": 2
  },
  {
    "name": "Tomato chutney (2 tbsp)",
    "calories": 40,
    "protein": 1,
    "carbs": 7,
    "fat": 1,
    "fibre": 1
  },
  {
    "name": "Garlic chutney (1 tbsp)",
    "calories": 55,
    "protein": 1,
    "carbs": 5,
    "fat": 4,
    "fibre": 1
  },
  {
    "name": "Coriander chutney (2 tbsp)",
    "calories": 25,
    "protein": 1,
    "carbs": 4,
    "fat": 0.5,
    "fibre": 1
  },
  {
    "name": "Ginger tea with milk (1 cup)",
    "calories": 70,
    "protein": 2,
    "carbs": 10,
    "fat": 2.5,
    "fibre": 0
  },
  {
    "name": "Moong dal halwa (1/2 cup)",
    "calories": 350,
    "protein": 9,
    "carbs": 38,
    "fat": 19,
    "fibre": 3
  },
  {
    "name": "Poha chivda (30 g)",
    "calories": 150,
    "protein": 3,
    "carbs": 20,
    "fat": 7,
    "fibre": 2
  },
  {
    "name": "Ragi cookies (2 pieces)",
    "calories": 125,
    "protein": 2,
    "carbs": 19,
    "fat": 5,
    "fibre": 2
  },
  {
    "name": "Khakhra plain (1 piece)",
    "calories": 120,
    "protein": 3,
    "carbs": 19,
    "fat": 4,
    "fibre": 3
  },
  {
    "name": "Handvo (1 slice)",
    "calories": 180,
    "protein": 7,
    "carbs": 25,
    "fat": 6,
    "fibre": 4
  },
  {
    "name": "Undhiyu (1 cup)",
    "calories": 240,
    "protein": 6,
    "carbs": 28,
    "fat": 12,
    "fibre": 7
  },
  {
    "name": "Khaman dhokla (2 pieces)",
    "calories": 160,
    "protein": 6,
    "carbs": 24,
    "fat": 5,
    "fibre": 3
  },
  {
    "name": "Dal dhokli (1 cup)",
    "calories": 280,
    "protein": 10,
    "carbs": 42,
    "fat": 8,
    "fibre": 6
  },
  {
    "name": "Bajra khichdi (1 cup)",
    "calories": 225,
    "protein": 7,
    "carbs": 39,
    "fat": 5,
    "fibre": 6
  },
  {
    "name": "Pongal ven (1 cup)",
    "calories": 270,
    "protein": 8,
    "carbs": 37,
    "fat": 10,
    "fibre": 4
  },
  {
    "name": "Pongal sweet (1 cup)",
    "calories": 340,
    "protein": 7,
    "carbs": 55,
    "fat": 11,
    "fibre": 2
  },
  {
    "name": "Bisibelebath (1 cup)",
    "calories": 285,
    "protein": 9,
    "carbs": 44,
    "fat": 8,
    "fibre": 6
  },
  {
    "name": "Akki roti (1 medium)",
    "calories": 180,
    "protein": 3,
    "carbs": 35,
    "fat": 4,
    "fibre": 2
  },
  {
    "name": "Vegetable kurma (1 cup)",
    "calories": 260,
    "protein": 6,
    "carbs": 21,
    "fat": 17,
    "fibre": 5
  },
  {
    "name": "Kootu vegetable dal (1 cup)",
    "calories": 200,
    "protein": 9,
    "carbs": 24,
    "fat": 8,
    "fibre": 6
  },
  {
    "name": "Avial (1 cup)",
    "calories": 190,
    "protein": 4,
    "carbs": 20,
    "fat": 11,
    "fibre": 5
  },
  {
    "name": "Thoran beans (1 cup)",
    "calories": 165,
    "protein": 4,
    "carbs": 15,
    "fat": 11,
    "fibre": 5
  },
  {
    "name": "Poriyal carrot beans (1 cup)",
    "calories": 145,
    "protein": 3,
    "carbs": 17,
    "fat": 8,
    "fibre": 5
  },
  {
    "name": "Idiyappam (2 nests)",
    "calories": 180,
    "protein": 3,
    "carbs": 39,
    "fat": 1,
    "fibre": 1
  },
  {
    "name": "Vegetable stew coconut milk (1 cup)",
    "calories": 240,
    "protein": 4,
    "carbs": 22,
    "fat": 16,
    "fibre": 4
  },
  {
    "name": "Puttu kadala curry (1 plate)",
    "calories": 480,
    "protein": 16,
    "carbs": 75,
    "fat": 14,
    "fibre": 13
  },
  {
    "name": "Kadala curry (1 cup)",
    "calories": 250,
    "protein": 12,
    "carbs": 35,
    "fat": 8,
    "fibre": 10
  },
  {
    "name": "Egg appam (1)",
    "calories": 200,
    "protein": 8,
    "carbs": 24,
    "fat": 8,
    "fibre": 1
  },
  {
    "name": "Chicken sukka (100 g)",
    "calories": 250,
    "protein": 25,
    "carbs": 5,
    "fat": 14,
    "fibre": 1
  },
  {
    "name": "Fish molee (1 cup)",
    "calories": 290,
    "protein": 23,
    "carbs": 10,
    "fat": 18,
    "fibre": 2
  },
  {
    "name": "Curd oats (1 cup)",
    "calories": 220,
    "protein": 11,
    "carbs": 30,
    "fat": 6,
    "fibre": 4
  },
  {
    "name": "Paneer dosa (1 medium)",
    "calories": 320,
    "protein": 14,
    "carbs": 31,
    "fat": 16,
    "fibre": 2
  },
  {
    "name": "Soybean curry (1 cup)",
    "calories": 260,
    "protein": 19,
    "carbs": 22,
    "fat": 12,
    "fibre": 8
  },
  {
    "name": "Vegetable ragi upma (1 cup)",
    "calories": 220,
    "protein": 6,
    "carbs": 35,
    "fat": 7,
    "fibre": 5
  },
  {
    "name": "Murmura plain (2 cups)",
    "calories": 110,
    "protein": 2,
    "carbs": 24,
    "fat": 0.5,
    "fibre": 1
  },
  {
    "name": "Fox nuts plain (30 g)",
    "calories": 105,
    "protein": 3,
    "carbs": 23,
    "fat": 0.2,
    "fibre": 2
  },
  {
    "name": "Coconut milk (100 ml)",
    "calories": 190,
    "protein": 2,
    "carbs": 3,
    "fat": 19,
    "fibre": 1
  },
  {
    "name": "Fresh coconut chutney (1 tbsp)",
    "calories": 50,
    "protein": 0.5,
    "carbs": 2,
    "fat": 5,
    "fibre": 1
  },
  {
    "name": "Homemade ghee (1 tbsp)",
    "calories": 135,
    "protein": 0,
    "carbs": 0,
    "fat": 15,
    "fibre": 0
  },
  {
    "name": "Butter (1 tsp)",
    "calories": 36,
    "protein": 0,
    "carbs": 0,
    "fat": 4,
    "fibre": 0
  },
  {
    "name": "Honey (1 tsp)",
    "calories": 21,
    "protein": 0,
    "carbs": 6,
    "fat": 0,
    "fibre": 0
  },
  {
    "name": "Flavoured yogurt sweetened (100 g)",
    "calories": 110,
    "protein": 4,
    "carbs": 17,
    "fat": 3,
    "fibre": 0
  },
  {
    "name": "Soy chunks boiled (100 g)",
    "calories": 115,
    "protein": 16,
    "carbs": 9,
    "fat": 1,
    "fibre": 5
  },
  {
    "name": "Lentil pancake (1 medium)",
    "calories": 170,
    "protein": 9,
    "carbs": 22,
    "fat": 5,
    "fibre": 5
  },
  {
    "name": "Mixed fruit smoothie (1 glass)",
    "calories": 210,
    "protein": 6,
    "carbs": 38,
    "fat": 4,
    "fibre": 4
  },
  {
    "name": "Mango lassi (1 glass)",
    "calories": 250,
    "protein": 7,
    "carbs": 43,
    "fat": 6,
    "fibre": 1
  },
  {
    "name": "Cucumber salad (1 bowl)",
    "calories": 45,
    "protein": 2,
    "carbs": 9,
    "fat": 0.5,
    "fibre": 2
  },
  {
    "name": "Kachumber salad (1 bowl)",
    "calories": 60,
    "protein": 2,
    "carbs": 12,
    "fat": 0.5,
    "fibre": 3
  },
  {
    "name": "Sprouted kala chana salad (1 cup)",
    "calories": 210,
    "protein": 12,
    "carbs": 31,
    "fat": 4,
    "fibre": 10
  },
  {
    "name": "Rajma salad (1 cup)",
    "calories": 220,
    "protein": 12,
    "carbs": 35,
    "fat": 3,
    "fibre": 10
  },
  {
    "name": "Lemon coriander soup (1 cup)",
    "calories": 80,
    "protein": 2,
    "carbs": 12,
    "fat": 3,
    "fibre": 2
  },
  {
    "name": "Tomato rasam (1 cup)",
    "calories": 65,
    "protein": 2,
    "carbs": 10,
    "fat": 2,
    "fibre": 2
  },
  {
    "name": "Masala papad (1 piece)",
    "calories": 100,
    "protein": 3,
    "carbs": 13,
    "fat": 4,
    "fibre": 2
  },
  {
    "name": "Masala peanuts (30 g)",
    "calories": 185,
    "protein": 7,
    "carbs": 10,
    "fat": 13,
    "fibre": 3
  },
  {
    "name": "Oats with banana (1 bowl)",
    "calories": 260,
    "protein": 9,
    "carbs": 48,
    "fat": 5,
    "fibre": 6
  },
  {
    "name": "Dates milkshake (1 glass)",
    "calories": 250,
    "protein": 9,
    "carbs": 45,
    "fat": 5,
    "fibre": 3
  },
  {
    "name": "Dry fruit milkshake (1 glass)",
    "calories": 350,
    "protein": 12,
    "carbs": 42,
    "fat": 16,
    "fibre": 4
  },
  {
    "name": "Protein sattu smoothie (1 glass)",
    "calories": 230,
    "protein": 15,
    "carbs": 31,
    "fat": 5,
    "fibre": 7
  },
  {
    "name": "Vegetable vermicelli (1 cup)",
    "calories": 215,
    "protein": 5,
    "carbs": 34,
    "fat": 7,
    "fibre": 3
  },
  {
    "name": "Chickpea flour pancake (1 medium)",
    "calories": 165,
    "protein": 8,
    "carbs": 22,
    "fat": 5,
    "fibre": 5
  },
  {
    "name": "Peanut ladoo (1 medium)",
    "calories": 170,
    "protein": 5,
    "carbs": 17,
    "fat": 10,
    "fibre": 2
  },
  {
    "name": "Steamed corn cob (1 medium)",
    "calories": 120,
    "protein": 4,
    "carbs": 27,
    "fat": 2,
    "fibre": 3
  },
  {
    "name": "Boiled peanuts (100 g)",
    "calories": 320,
    "protein": 14,
    "carbs": 22,
    "fat": 23,
    "fibre": 8
  },
  {
    "name": "Coconut water (200 ml)",
    "calories": 38,
    "protein": 0.7,
    "carbs": 9,
    "fat": 0,
    "fibre": 0
  },
  {
    "name": "Watermelon juice unsweetened (1 glass)",
    "calories": 70,
    "protein": 1,
    "carbs": 17,
    "fat": 0,
    "fibre": 0.5
  },
  {
    "name": "Orange juice fresh (1 glass)",
    "calories": 110,
    "protein": 2,
    "carbs": 25,
    "fat": 0,
    "fibre": 0.5
  },
  {
    "name": "Pomegranate juice (1 glass)",
    "calories": 135,
    "protein": 1,
    "carbs": 32,
    "fat": 0,
    "fibre": 0.5
  },
  {
    "name": "Paneer salad (1 bowl)",
    "calories": 280,
    "protein": 18,
    "carbs": 12,
    "fat": 18,
    "fibre": 3
  },
  {
    "name": "Chicken salad (1 bowl)",
    "calories": 240,
    "protein": 27,
    "carbs": 10,
    "fat": 10,
    "fibre": 3
  },
  {
    "name": "Tuna salad (1 bowl)",
    "calories": 220,
    "protein": 25,
    "carbs": 9,
    "fat": 9,
    "fibre": 3
  },
  {
    "name": "Chia pudding with milk (1 cup)",
    "calories": 220,
    "protein": 9,
    "carbs": 23,
    "fat": 11,
    "fibre": 10
  },
  {
    "name": "Overnight oats (1 cup)",
    "calories": 280,
    "protein": 11,
    "carbs": 42,
    "fat": 8,
    "fibre": 7
  },
  {
    "name": "Flaxseed chutney powder (1 tbsp)",
    "calories": 55,
    "protein": 2,
    "carbs": 3,
    "fat": 4,
    "fibre": 2
  },
  {
    "name": "Methi thepla (1 medium)",
    "calories": 165,
    "protein": 4,
    "carbs": 26,
    "fat": 5,
    "fibre": 3
  },
  {
    "name": "Matar kulcha (1 plate)",
    "calories": 470,
    "protein": 16,
    "carbs": 70,
    "fat": 14,
    "fibre": 11
  },
  {
    "name": "Vegetable hakka noodles (1 cup)",
    "calories": 290,
    "protein": 7,
    "carbs": 45,
    "fat": 9,
    "fibre": 3
  },
  {
    "name": "Vegetable manchurian gravy (1 cup)",
    "calories": 280,
    "protein": 6,
    "carbs": 34,
    "fat": 13,
    "fibre": 4
  },
  {
    "name": "Chilli paneer (1 cup)",
    "calories": 380,
    "protein": 19,
    "carbs": 24,
    "fat": 23,
    "fibre": 3
  },
  {
    "name": "Chicken 65 (100 g)",
    "calories": 290,
    "protein": 23,
    "carbs": 12,
    "fat": 16,
    "fibre": 1
  },
  {
    "name": "Gobi manchurian (1 cup)",
    "calories": 310,
    "protein": 7,
    "carbs": 38,
    "fat": 14,
    "fibre": 4
  },
  {
    "name": "Veg spring roll (1 piece)",
    "calories": 150,
    "protein": 3,
    "carbs": 18,
    "fat": 7,
    "fibre": 2
  },
  {
    "name": "Paneer pakora (2 pieces)",
    "calories": 290,
    "protein": 12,
    "carbs": 22,
    "fat": 17,
    "fibre": 2
  },
  {
    "name": "Karela sabzi (1 cup)",
    "calories": 120,
    "protein": 3,
    "carbs": 13,
    "fat": 7,
    "fibre": 5
  },
  {
    "name": "Karela stuffed (1 medium)",
    "calories": 160,
    "protein": 3,
    "carbs": 17,
    "fat": 9,
    "fibre": 5
  },
  {
    "name": "Lauki kofta (1 cup)",
    "calories": 280,
    "protein": 7,
    "carbs": 23,
    "fat": 18,
    "fibre": 4
  },
  {
    "name": "Kofta malai (1 cup)",
    "calories": 390,
    "protein": 10,
    "carbs": 22,
    "fat": 30,
    "fibre": 3
  },
  {
    "name": "Palak corn (1 cup)",
    "calories": 210,
    "protein": 7,
    "carbs": 25,
    "fat": 10,
    "fibre": 5
  },
  {
    "name": "Sarson ka saag (1 cup)",
    "calories": 190,
    "protein": 6,
    "carbs": 16,
    "fat": 12,
    "fibre": 6
  },
  {
    "name": "Chana saag (1 cup)",
    "calories": 240,
    "protein": 11,
    "carbs": 30,
    "fat": 9,
    "fibre": 8
  },
  {
    "name": "Mushroom peas (1 cup)",
    "calories": 185,
    "protein": 7,
    "carbs": 18,
    "fat": 9,
    "fibre": 5
  },
  {
    "name": "Capsicum potato sabzi (1 cup)",
    "calories": 190,
    "protein": 4,
    "carbs": 27,
    "fat": 8,
    "fibre": 4
  },
  {
    "name": "Stuffed capsicum (1 medium)",
    "calories": 170,
    "protein": 5,
    "carbs": 20,
    "fat": 8,
    "fibre": 4
  },
  {
    "name": "Tomato onion sabzi (1 cup)",
    "calories": 130,
    "protein": 3,
    "carbs": 16,
    "fat": 6,
    "fibre": 3
  },
  {
    "name": "Cucumber curd salad (1 cup)",
    "calories": 125,
    "protein": 7,
    "carbs": 10,
    "fat": 6,
    "fibre": 1
  },
  {
    "name": "Boiled beetroot salad (1 cup)",
    "calories": 95,
    "protein": 3,
    "carbs": 20,
    "fat": 1,
    "fibre": 4
  },
  {
    "name": "Vegetable dal soup (1 cup)",
    "calories": 145,
    "protein": 8,
    "carbs": 22,
    "fat": 3,
    "fibre": 5
  },
  {
    "name": "Soya chaap curry (1 cup)",
    "calories": 310,
    "protein": 21,
    "carbs": 18,
    "fat": 18,
    "fibre": 5
  },
  {
    "name": "Soya keema (1 cup)",
    "calories": 230,
    "protein": 23,
    "carbs": 15,
    "fat": 8,
    "fibre": 7
  },
  {
    "name": "Kala chana curry (1 cup)",
    "calories": 250,
    "protein": 12,
    "carbs": 35,
    "fat": 8,
    "fibre": 10
  },
  {
    "name": "Green moong sprouts (1 cup)",
    "calories": 100,
    "protein": 8,
    "carbs": 17,
    "fat": 1,
    "fibre": 5
  },
  {
    "name": "Methi matar malai (1 cup)",
    "calories": 310,
    "protein": 7,
    "carbs": 19,
    "fat": 24,
    "fibre": 4
  },
  {
    "name": "Tandoori roti (1 medium)",
    "calories": 120,
    "protein": 4,
    "carbs": 24,
    "fat": 1,
    "fibre": 3
  },
  {
    "name": "Roomali roti (1 medium)",
    "calories": 140,
    "protein": 4,
    "carbs": 27,
    "fat": 2,
    "fibre": 2
  },
  {
    "name": "Butter roti (1 medium)",
    "calories": 155,
    "protein": 4,
    "carbs": 24,
    "fat": 5,
    "fibre": 3
  },
  {
    "name": "Egg paratha (1 medium)",
    "calories": 280,
    "protein": 12,
    "carbs": 31,
    "fat": 12,
    "fibre": 3
  },
  {
    "name": "Chicken paratha (1 medium)",
    "calories": 340,
    "protein": 20,
    "carbs": 34,
    "fat": 14,
    "fibre": 3
  },
  {
    "name": "Paneer stuffed kulcha (1 medium)",
    "calories": 330,
    "protein": 14,
    "carbs": 42,
    "fat": 12,
    "fibre": 3
  },
  {
    "name": "Chole bhature (1 plate)",
    "calories": 650,
    "protein": 19,
    "carbs": 80,
    "fat": 28,
    "fibre": 12
  },
  {
    "name": "Rajma chawal (1 plate)",
    "calories": 480,
    "protein": 17,
    "carbs": 80,
    "fat": 10,
    "fibre": 13
  },
  {
    "name": "Dal chawal (1 plate)",
    "calories": 410,
    "protein": 15,
    "carbs": 73,
    "fat": 7,
    "fibre": 9
  },
  {
    "name": "Kadhi chawal (1 plate)",
    "calories": 430,
    "protein": 12,
    "carbs": 70,
    "fat": 11,
    "fibre": 4
  },
  {
    "name": "Curd rice with tadka (1 cup)",
    "calories": 290,
    "protein": 8,
    "carbs": 42,
    "fat": 10,
    "fibre": 1
  },
  {
    "name": "Vegetable dal khichdi (1 cup)",
    "calories": 260,
    "protein": 10,
    "carbs": 39,
    "fat": 7,
    "fibre": 7
  },
  {
    "name": "Egg biryani (1 cup)",
    "calories": 330,
    "protein": 12,
    "carbs": 43,
    "fat": 12,
    "fibre": 2
  },
  {
    "name": "Paneer biryani (1 cup)",
    "calories": 370,
    "protein": 13,
    "carbs": 43,
    "fat": 16,
    "fibre": 3
  },
  {
    "name": "Fish biryani (1 cup)",
    "calories": 350,
    "protein": 20,
    "carbs": 42,
    "fat": 11,
    "fibre": 2
  },
  {
    "name": "Mutton biryani (1 cup)",
    "calories": 420,
    "protein": 20,
    "carbs": 44,
    "fat": 19,
    "fibre": 2
  },
  {
    "name": "Paneer butter masala (1 cup)",
    "calories": 390,
    "protein": 16,
    "carbs": 18,
    "fat": 28,
    "fibre": 3
  },
  {
    "name": "Butter chicken (1 cup)",
    "calories": 420,
    "protein": 28,
    "carbs": 13,
    "fat": 29,
    "fibre": 2
  },
  {
    "name": "Chicken korma (1 cup)",
    "calories": 380,
    "protein": 27,
    "carbs": 12,
    "fat": 25,
    "fibre": 3
  },
  {
    "name": "Fish tikka (100 g)",
    "calories": 160,
    "protein": 24,
    "carbs": 3,
    "fat": 6,
    "fibre": 0
  },
  {
    "name": "Egg drop soup (1 cup)",
    "calories": 95,
    "protein": 7,
    "carbs": 5,
    "fat": 5,
    "fibre": 0
  },
  {
    "name": "Coconut burfi (1 piece)",
    "calories": 160,
    "protein": 2,
    "carbs": 20,
    "fat": 9,
    "fibre": 1
  },
  {
    "name": "Milk peda (1 piece)",
    "calories": 130,
    "protein": 4,
    "carbs": 17,
    "fat": 5,
    "fibre": 0
  },
  {
    "name": "Mysore pak (1 piece)",
    "calories": 220,
    "protein": 3,
    "carbs": 20,
    "fat": 15,
    "fibre": 1
  },
  {
    "name": "Soan papdi (30 g)",
    "calories": 160,
    "protein": 2,
    "carbs": 20,
    "fat": 8,
    "fibre": 1
  },
  {
    "name": "Fruit custard (1 cup)",
    "calories": 240,
    "protein": 6,
    "carbs": 42,
    "fat": 6,
    "fibre": 2
  },
  {
    "name": "Bread halwa (1/2 cup)",
    "calories": 300,
    "protein": 5,
    "carbs": 42,
    "fat": 13,
    "fibre": 1
  },
  {
    "name": "Banana chips (30 g)",
    "calories": 165,
    "protein": 1,
    "carbs": 18,
    "fat": 10,
    "fibre": 2
  },
  {
    "name": "Potato chips (30 g)",
    "calories": 160,
    "protein": 2,
    "carbs": 16,
    "fat": 10,
    "fibre": 1
  },
  {
    "name": "Masala popcorn (3 cups)",
    "calories": 130,
    "protein": 4,
    "carbs": 22,
    "fat": 4,
    "fibre": 4
  },
  {
    "name": "Popcorn plain air-popped (3 cups)",
    "calories": 95,
    "protein": 3,
    "carbs": 19,
    "fat": 1,
    "fibre": 3.5
  },
  {
    "name": "Sattu powder (30 g)",
    "calories": 120,
    "protein": 7,
    "carbs": 18,
    "fat": 2,
    "fibre": 5
  },
  {
    "name": "Roasted soybean (30 g)",
    "calories": 135,
    "protein": 13,
    "carbs": 9,
    "fat": 5,
    "fibre": 5
  },
  {
    "name": "Chia seeds (20 g)",
    "calories": 97,
    "protein": 3.5,
    "carbs": 8,
    "fat": 6,
    "fibre": 7
  },
  {
    "name": "Flaxseed (20 g)",
    "calories": 107,
    "protein": 4,
    "carbs": 6,
    "fat": 8,
    "fibre": 5
  },
  {
    "name": "Sunflower seed butter (1 tbsp)",
    "calories": 100,
    "protein": 3,
    "carbs": 4,
    "fat": 9,
    "fibre": 1
  },
  {
    "name": "Almond butter (1 tbsp)",
    "calories": 98,
    "protein": 3.5,
    "carbs": 3,
    "fat": 9,
    "fibre": 1.5
  },
  {
    "name": "Peanut butter unsweetened (2 tbsp)",
    "calories": 190,
    "protein": 8,
    "carbs": 7,
    "fat": 16,
    "fibre": 2
  },
  {
    "name": "Dates (1 medjool)",
    "calories": 66,
    "protein": 0.4,
    "carbs": 18,
    "fat": 0,
    "fibre": 1.6
  },
  {
    "name": "Raisins (10 pieces)",
    "calories": 15,
    "protein": 0.2,
    "carbs": 4,
    "fat": 0,
    "fibre": 0.2
  },
  {
    "name": "Walnuts (4 halves)",
    "calories": 52,
    "protein": 1.2,
    "carbs": 1,
    "fat": 5.2,
    "fibre": 0.5
  },
  {
    "name": "Cashews (10 pieces)",
    "calories": 90,
    "protein": 3,
    "carbs": 5,
    "fat": 7,
    "fibre": 0.5
  },
  {
    "name": "Pistachios (20 kernels)",
    "calories": 65,
    "protein": 2.5,
    "carbs": 3,
    "fat": 5,
    "fibre": 1
  },
  {
    "name": "Pecans (15 g)",
    "calories": 104,
    "protein": 1.4,
    "carbs": 2,
    "fat": 11,
    "fibre": 1.5
  },
  {
    "name": "Brazil nuts (2)",
    "calories": 65,
    "protein": 1.4,
    "carbs": 1,
    "fat": 6.5,
    "fibre": 0.7
  },
  {
    "name": "Makhanas dry roasted (1 cup)",
    "calories": 65,
    "protein": 2,
    "carbs": 14,
    "fat": 0.2,
    "fibre": 1
  },
  {
    "name": "Soya milk with cocoa (1 cup)",
    "calories": 130,
    "protein": 8,
    "carbs": 16,
    "fat": 4,
    "fibre": 2
  },
  {
    "name": "Lentil pasta cooked (1 cup)",
    "calories": 220,
    "protein": 13,
    "carbs": 36,
    "fat": 3,
    "fibre": 7
  },
  {
    "name": "Millet dosa (1 medium)",
    "calories": 155,
    "protein": 4,
    "carbs": 27,
    "fat": 4,
    "fibre": 3
  },
  {
    "name": "Bajra upma (1 cup)",
    "calories": 220,
    "protein": 6,
    "carbs": 37,
    "fat": 6,
    "fibre": 5
  },
  {
    "name": "Ragi idli (1 medium)",
    "calories": 65,
    "protein": 2,
    "carbs": 13,
    "fat": 0.6,
    "fibre": 1
  },
  {
    "name": "Oats idli (1 medium)",
    "calories": 75,
    "protein": 3,
    "carbs": 13,
    "fat": 1,
    "fibre": 2
  },
  {
    "name": "Beetroot raita (1 cup)",
    "calories": 145,
    "protein": 8,
    "carbs": 15,
    "fat": 6,
    "fibre": 2
  },
  {
    "name": "Pomegranate raita (1 cup)",
    "calories": 170,
    "protein": 8,
    "carbs": 22,
    "fat": 6,
    "fibre": 2
  },
  {
    "name": "Palak raita (1 cup)",
    "calories": 140,
    "protein": 8,
    "carbs": 12,
    "fat": 6,
    "fibre": 2
  },
  {
    "name": "Lauki raita (1 cup)",
    "calories": 130,
    "protein": 8,
    "carbs": 11,
    "fat": 6,
    "fibre": 2
  },
  {
    "name": "Soya pulao (1 cup)",
    "calories": 330,
    "protein": 16,
    "carbs": 43,
    "fat": 10,
    "fibre": 5
  },
  {
    "name": "Soya paratha (1 medium)",
    "calories": 230,
    "protein": 13,
    "carbs": 30,
    "fat": 7,
    "fibre": 5
  },
  {
    "name": "Mushroom omelette (2 eggs)",
    "calories": 230,
    "protein": 15,
    "carbs": 5,
    "fat": 17,
    "fibre": 1
  },
  {
    "name": "Spinach omelette (2 eggs)",
    "calories": 220,
    "protein": 15,
    "carbs": 4,
    "fat": 16,
    "fibre": 1
  },
  {
    "name": "Chicken omelette (2 eggs)",
    "calories": 270,
    "protein": 25,
    "carbs": 3,
    "fat": 18,
    "fibre": 0
  },
  {
    "name": "Fish fingers baked (100 g)",
    "calories": 210,
    "protein": 19,
    "carbs": 16,
    "fat": 8,
    "fibre": 1
  },
  {
    "name": "Chickpea dosa (1 medium)",
    "calories": 165,
    "protein": 8,
    "carbs": 23,
    "fat": 5,
    "fibre": 5
  },
  {
    "name": "Ridge gourd chutney (2 tbsp)",
    "calories": 60,
    "protein": 1,
    "carbs": 6,
    "fat": 4,
    "fibre": 2
  },
  {
    "name": "Tomato onion salad (1 bowl)",
    "calories": 55,
    "protein": 2,
    "carbs": 11,
    "fat": 0.5,
    "fibre": 3
  },
  {
    "name": "Carrot cucumber salad (1 bowl)",
    "calories": 65,
    "protein": 2,
    "carbs": 14,
    "fat": 0.5,
    "fibre": 4
  },
  {
    "name": "Mixed vegetable salad (1 bowl)",
    "calories": 85,
    "protein": 3,
    "carbs": 16,
    "fat": 1,
    "fibre": 5
  },
  {
    "name": "Green smoothie spinach banana (1 glass)",
    "calories": 160,
    "protein": 4,
    "carbs": 34,
    "fat": 2,
    "fibre": 5
  },
  {
    "name": "Apple smoothie with milk (1 glass)",
    "calories": 210,
    "protein": 8,
    "carbs": 38,
    "fat": 4,
    "fibre": 4
  },
  {
    "name": "Protein oats (1 bowl)",
    "calories": 320,
    "protein": 23,
    "carbs": 38,
    "fat": 9,
    "fibre": 6
  },
  {
    "name": "Paneer oats chilla (1 medium)",
    "calories": 240,
    "protein": 14,
    "carbs": 22,
    "fat": 10,
    "fibre": 4
  },
  {
    "name": "Moong dal dosa (1 medium)",
    "calories": 155,
    "protein": 9,
    "carbs": 22,
    "fat": 4,
    "fibre": 4
  },
  {
    "name": "Besan vegetable pancake (1 medium)",
    "calories": 170,
    "protein": 8,
    "carbs": 22,
    "fat": 6,
    "fibre": 5
  },
  {
    "name": "Tofu curry (1 cup)",
    "calories": 240,
    "protein": 17,
    "carbs": 16,
    "fat": 12,
    "fibre": 4
  },
  {
    "name": "Broccoli stir fry (1 cup)",
    "calories": 120,
    "protein": 4,
    "carbs": 12,
    "fat": 7,
    "fibre": 4
  },
  {
    "name": "Mushroom stir fry (1 cup)",
    "calories": 115,
    "protein": 6,
    "carbs": 10,
    "fat": 6,
    "fibre": 3
  },
  {
    "name": "Sweet corn soup (1 cup)",
    "calories": 140,
    "protein": 4,
    "carbs": 25,
    "fat": 3,
    "fibre": 2
  },
  {
    "name": "Vegetable barley soup (1 cup)",
    "calories": 155,
    "protein": 5,
    "carbs": 28,
    "fat": 3,
    "fibre": 5
  },
  {
    "name": "Vegetable quinoa bowl (1 bowl)",
    "calories": 320,
    "protein": 10,
    "carbs": 52,
    "fat": 8,
    "fibre": 8
  },
  {
    "name": "Chickpea quinoa bowl (1 bowl)",
    "calories": 390,
    "protein": 16,
    "carbs": 58,
    "fat": 10,
    "fibre": 12
  },
  {
    "name": "Sattu stuffed roti (1 medium)",
    "calories": 210,
    "protein": 9,
    "carbs": 32,
    "fat": 6,
    "fibre": 6
  },
  {
    "name": "Banana oats pancake (1 medium)",
    "calories": 175,
    "protein": 6,
    "carbs": 28,
    "fat": 5,
    "fibre": 4
  },
  {
    "name": "Ragi banana pancake (1 medium)",
    "calories": 180,
    "protein": 5,
    "carbs": 30,
    "fat": 5,
    "fibre": 4
  },
  {
    "name": "Curd with fruit (1 cup)",
    "calories": 180,
    "protein": 8,
    "carbs": 26,
    "fat": 5,
    "fibre": 3
  },
  {
    "name": "Paneer and peas sabzi (1 cup)",
    "calories": 310,
    "protein": 18,
    "carbs": 17,
    "fat": 20,
    "fibre": 5
  },
  {
    "name": "Egg and spinach curry (1 cup)",
    "calories": 250,
    "protein": 15,
    "carbs": 12,
    "fat": 16,
    "fibre": 3
  },
  {
    "name": "Chana dal lauki (1 cup)",
    "calories": 175,
    "protein": 8,
    "carbs": 24,
    "fat": 6,
    "fibre": 6
  },
  {
    "name": "Mixed sprouts bhel (1 cup)",
    "calories": 210,
    "protein": 11,
    "carbs": 32,
    "fat": 5,
    "fibre": 8
  },
  {
    "name": "Moong dal khichdi with ghee (1 cup)",
    "calories": 285,
    "protein": 10,
    "carbs": 38,
    "fat": 11,
    "fibre": 6
  },
  {
    "name": "Vegetable dalia with curd (1 bowl)",
    "calories": 250,
    "protein": 11,
    "carbs": 37,
    "fat": 6,
    "fibre": 6
  },
  {
    "name": "Plain coconut water (1 cup)",
    "calories": 45,
    "protein": 1,
    "carbs": 11,
    "fat": 0,
    "fibre": 0
  },
  {
    "name": "Ginger lemon water (1 glass)",
    "calories": 8,
    "protein": 0,
    "carbs": 2,
    "fat": 0,
    "fibre": 0
  },
  {
    "name": "Roasted pumpkin (100 g)",
    "calories": 55,
    "protein": 1.5,
    "carbs": 12,
    "fat": 0.3,
    "fibre": 2
  },
  {
    "name": "Raw papaya sabzi (1 cup)",
    "calories": 130,
    "protein": 3,
    "carbs": 18,
    "fat": 6,
    "fibre": 4
  },
  {
    "name": "Aloo beans sabzi (1 cup)",
    "calories": 185,
    "protein": 4,
    "carbs": 27,
    "fat": 7,
    "fibre": 5
  },
  {
    "name": "Lauki kofta baked (1 cup)",
    "calories": 200,
    "protein": 7,
    "carbs": 23,
    "fat": 9,
    "fibre": 4
  },
  {
    "name": "Paneer spinach sandwich (1)",
    "calories": 320,
    "protein": 17,
    "carbs": 33,
    "fat": 13,
    "fibre": 5
  },
  {
    "name": "Chicken vegetable sandwich (1)",
    "calories": 330,
    "protein": 24,
    "carbs": 32,
    "fat": 12,
    "fibre": 4
  },
  {
    "name": "Boiled egg sandwich (1)",
    "calories": 290,
    "protein": 16,
    "carbs": 30,
    "fat": 11,
    "fibre": 3
  },
  {
    "name": "Peanut poha (1 cup)",
    "calories": 310,
    "protein": 8,
    "carbs": 43,
    "fat": 12,
    "fibre": 4
  },
  {
    "name": "Sattu chilla (1 medium)",
    "calories": 170,
    "protein": 9,
    "carbs": 24,
    "fat": 4,
    "fibre": 5
  },
  {
    "name": "Coconut jaggery ladoo (1 medium)",
    "calories": 155,
    "protein": 2,
    "carbs": 20,
    "fat": 8,
    "fibre": 2
  },
  {
    "name": "Til chikki (30 g)",
    "calories": 150,
    "protein": 4,
    "carbs": 18,
    "fat": 7,
    "fibre": 2
  },
  {
    "name": "Dry fruit ladoo (1 medium)",
    "calories": 190,
    "protein": 4,
    "carbs": 21,
    "fat": 11,
    "fibre": 3
  },
  {
    "name": "Ragi ladoo (1 medium)",
    "calories": 160,
    "protein": 3,
    "carbs": 25,
    "fat": 6,
    "fibre": 2
  },
  {
    "name": "Masala khichdi (1 cup)",
    "calories": 280,
    "protein": 10,
    "carbs": 42,
    "fat": 8,
    "fibre": 7
  },
  {
    "name": "Mixed vegetable paratha (1 medium)",
    "calories": 215,
    "protein": 6,
    "carbs": 32,
    "fat": 7,
    "fibre": 5
  },
  {
    "name": "Soybean sprouts salad (1 cup)",
    "calories": 190,
    "protein": 16,
    "carbs": 18,
    "fat": 6,
    "fibre": 7
  },
  {
    "name": "Oats upma (1 cup)",
    "calories": 215,
    "protein": 7,
    "carbs": 32,
    "fat": 7,
    "fibre": 5
  },
  {
    "name": "Kuttu roti (1 medium)",
    "calories": 135,
    "protein": 4,
    "carbs": 26,
    "fat": 2,
    "fibre": 4
  },
  {
    "name": "Singhara atta roti (1 medium)",
    "calories": 150,
    "protein": 3,
    "carbs": 31,
    "fat": 1,
    "fibre": 3
  },
  {
    "name": "Samak rice khichdi (1 cup)",
    "calories": 230,
    "protein": 5,
    "carbs": 41,
    "fat": 5,
    "fibre": 3
  },
  {
    "name": "Sabudana vada (1 piece)",
    "calories": 180,
    "protein": 3,
    "carbs": 25,
    "fat": 8,
    "fibre": 1
  },
  {
    "name": "Farali pattice (1 medium)",
    "calories": 200,
    "protein": 4,
    "carbs": 29,
    "fat": 8,
    "fibre": 2
  },
  {
    "name": "Plain makhana kheer (1/2 cup)",
    "calories": 200,
    "protein": 6,
    "carbs": 29,
    "fat": 7,
    "fibre": 2
  },
  {
    "name": "Paneer stuffed dosa (1 medium)",
    "calories": 330,
    "protein": 15,
    "carbs": 32,
    "fat": 16,
    "fibre": 2
  },
  {
    "name": "Vegetable uttapam (1 medium)",
    "calories": 190,
    "protein": 5,
    "carbs": 28,
    "fat": 6,
    "fibre": 3
  },
  {
    "name": "Masala idli (1 cup)",
    "calories": 220,
    "protein": 6,
    "carbs": 31,
    "fat": 8,
    "fibre": 3
  },
  {
    "name": "Idli sambar (2 idli + 1 cup sambar)",
    "calories": 250,
    "protein": 10,
    "carbs": 44,
    "fat": 4,
    "fibre": 6
  },
  {
    "name": "Dosa sambar (1 dosa + 1 cup sambar)",
    "calories": 265,
    "protein": 9,
    "carbs": 40,
    "fat": 7,
    "fibre": 6
  },
  {
    "name": "Chapati dal (2 roti + 1 cup dal)",
    "calories": 400,
    "protein": 17,
    "carbs": 63,
    "fat": 10,
    "fibre": 14
  },
  {
    "name": "Chapati sabzi (2 roti + 1 cup sabzi)",
    "calories": 350,
    "protein": 10,
    "carbs": 52,
    "fat": 11,
    "fibre": 9
  },
  {
    "name": "Milk oats with nuts (1 bowl)",
    "calories": 300,
    "protein": 12,
    "carbs": 37,
    "fat": 12,
    "fibre": 6
  },
  {
    "name": "Oats with dates (1 bowl)",
    "calories": 270,
    "protein": 9,
    "carbs": 47,
    "fat": 5,
    "fibre": 6
  },
  {
    "name": "Besan chilla with paneer (1 medium)",
    "calories": 280,
    "protein": 17,
    "carbs": 22,
    "fat": 14,
    "fibre": 4
  },
  {
    "name": "Moong dal chilla with paneer (1 medium)",
    "calories": 290,
    "protein": 19,
    "carbs": 24,
    "fat": 13,
    "fibre": 5
  },
  {
    "name": "Egg bhurji with toast (1 plate)",
    "calories": 370,
    "protein": 19,
    "carbs": 34,
    "fat": 18,
    "fibre": 5
  },
  {
    "name": "Paneer bhurji with roti (1 plate)",
    "calories": 420,
    "protein": 22,
    "carbs": 30,
    "fat": 23,
    "fibre": 5
  },
  {
    "name": "Chicken curry with rice (1 plate)",
    "calories": 500,
    "protein": 29,
    "carbs": 56,
    "fat": 18,
    "fibre": 3
  },
  {
    "name": "Fish curry with rice (1 plate)",
    "calories": 450,
    "protein": 26,
    "carbs": 54,
    "fat": 13,
    "fibre": 3
  },
  {
    "name": "Rajma rice with salad (1 plate)",
    "calories": 520,
    "protein": 19,
    "carbs": 84,
    "fat": 11,
    "fibre": 17
  },
  {
    "name": "Chole rice (1 plate)",
    "calories": 490,
    "protein": 16,
    "carbs": 78,
    "fat": 13,
    "fibre": 13
  },
  {
    "name": "Curd rice with pickle (1 plate)",
    "calories": 310,
    "protein": 9,
    "carbs": 44,
    "fat": 11,
    "fibre": 1
  },
  {
    "name": "Vegetable dal with rice (1 plate)",
    "calories": 440,
    "protein": 16,
    "carbs": 75,
    "fat": 9,
    "fibre": 12
  },
  {
    "name": "Lemon poha (1 cup)",
    "calories": 250,
    "protein": 5,
    "carbs": 41,
    "fat": 8,
    "fibre": 3
  },
  {
    "name": "Coconut poha (1 cup)",
    "calories": 290,
    "protein": 5,
    "carbs": 40,
    "fat": 12,
    "fibre": 3
  },
  {
    "name": "Paneer tikka sandwich (1)",
    "calories": 340,
    "protein": 18,
    "carbs": 32,
    "fat": 15,
    "fibre": 4
  },
  {
    "name": "Tofu sandwich (1)",
    "calories": 280,
    "protein": 15,
    "carbs": 31,
    "fat": 10,
    "fibre": 5
  },
  {
    "name": "Soya chunks salad (1 bowl)",
    "calories": 230,
    "protein": 23,
    "carbs": 19,
    "fat": 7,
    "fibre": 7
  },
  {
    "name": "Protein curd bowl (1 bowl)",
    "calories": 260,
    "protein": 23,
    "carbs": 26,
    "fat": 7,
    "fibre": 3
  },
  {
    "name": "Sattu buttermilk (1 glass)",
    "calories": 155,
    "protein": 10,
    "carbs": 20,
    "fat": 4,
    "fibre": 5
  },
  {
    "name": "Millet vegetable pulao (1 cup)",
    "calories": 250,
    "protein": 7,
    "carbs": 43,
    "fat": 6,
    "fibre": 5
  },
  {
    "name": "Millet curd rice (1 cup)",
    "calories": 260,
    "protein": 9,
    "carbs": 39,
    "fat": 7,
    "fibre": 3
  },
  {
    "name": "Millet pongal (1 cup)",
    "calories": 265,
    "protein": 9,
    "carbs": 38,
    "fat": 9,
    "fibre": 5
  },
  {
    "name": "Ragi khichdi (1 cup)",
    "calories": 235,
    "protein": 8,
    "carbs": 38,
    "fat": 6,
    "fibre": 6
  },
  {
    "name": "Ragi porridge savory (1 cup)",
    "calories": 160,
    "protein": 5,
    "carbs": 27,
    "fat": 4,
    "fibre": 4
  },
  {
    "name": "Egg white scramble (4 whites)",
    "calories": 85,
    "protein": 15,
    "carbs": 2,
    "fat": 1,
    "fibre": 0
  },
  {
    "name": "Paneer cubes grilled (50 g)",
    "calories": 125,
    "protein": 9,
    "carbs": 2,
    "fat": 9,
    "fibre": 0
  },
  {
    "name": "Tofu cubes grilled (100 g)",
    "calories": 135,
    "protein": 13,
    "carbs": 4,
    "fat": 7,
    "fibre": 1
  },
  {
    "name": "Greek yogurt with nuts (1 bowl)",
    "calories": 220,
    "protein": 14,
    "carbs": 12,
    "fat": 14,
    "fibre": 2
  },
  {
    "name": "Skyr with fruit (1 bowl)",
    "calories": 165,
    "protein": 15,
    "carbs": 23,
    "fat": 1,
    "fibre": 3
  },
  {
    "name": "Chickpea cucumber salad (1 bowl)",
    "calories": 210,
    "protein": 11,
    "carbs": 31,
    "fat": 5,
    "fibre": 9
  },
  {
    "name": "Sprouts curd salad (1 bowl)",
    "calories": 180,
    "protein": 12,
    "carbs": 22,
    "fat": 5,
    "fibre": 6
  },
  {
    "name": "Roasted chana with jaggery (30 g)",
    "calories": 145,
    "protein": 6,
    "carbs": 23,
    "fat": 3,
    "fibre": 4
  },
  {
    "name": "Roasted peanuts with jaggery (30 g)",
    "calories": 175,
    "protein": 6,
    "carbs": 18,
    "fat": 9,
    "fibre": 2
  },
  {
    "name": "Coconut dates bar (1 piece)",
    "calories": 160,
    "protein": 2,
    "carbs": 23,
    "fat": 8,
    "fibre": 3
  },
  {
    "name": "Soya cutlet (1 medium)",
    "calories": 190,
    "protein": 13,
    "carbs": 19,
    "fat": 7,
    "fibre": 5
  },
  {
    "name": "Paneer cutlet (1 medium)",
    "calories": 220,
    "protein": 12,
    "carbs": 17,
    "fat": 12,
    "fibre": 2
  },
  {
    "name": "Vegetable oats cutlet (1 medium)",
    "calories": 160,
    "protein": 5,
    "carbs": 23,
    "fat": 6,
    "fibre": 4
  },
  {
    "name": "Moong sprouts cutlet (1 medium)",
    "calories": 165,
    "protein": 9,
    "carbs": 21,
    "fat": 5,
    "fibre": 5
  },
  {
    "name": "Vegetable millet cutlet (1 medium)",
    "calories": 170,
    "protein": 5,
    "carbs": 26,
    "fat": 5,
    "fibre": 4
  },
  {
    "name": "Chicken cutlet (1 medium)",
    "calories": 230,
    "protein": 18,
    "carbs": 16,
    "fat": 10,
    "fibre": 2
  },
  {
    "name": "Fish cutlet (1 medium)",
    "calories": 210,
    "protein": 16,
    "carbs": 16,
    "fat": 9,
    "fibre": 2
  },
  {
    "name": "Chicken kebab (100 g)",
    "calories": 190,
    "protein": 25,
    "carbs": 4,
    "fat": 8,
    "fibre": 1
  },
  {
    "name": "Paneer kebab (100 g)",
    "calories": 240,
    "protein": 17,
    "carbs": 7,
    "fat": 16,
    "fibre": 2
  },
  {
    "name": "Soya kebab (100 g)",
    "calories": 200,
    "protein": 17,
    "carbs": 12,
    "fat": 9,
    "fibre": 4
  },
  {
    "name": "Hara bhara kebab (2 pieces)",
    "calories": 210,
    "protein": 6,
    "carbs": 26,
    "fat": 10,
    "fibre": 5
  },
  {
    "name": "Vegetable tikki baked (1 medium)",
    "calories": 135,
    "protein": 4,
    "carbs": 21,
    "fat": 4,
    "fibre": 3
  },
  {
    "name": "Dahi sandwich (1)",
    "calories": 220,
    "protein": 9,
    "carbs": 32,
    "fat": 6,
    "fibre": 4
  },
  {
    "name": "Veg cheese sandwich (1)",
    "calories": 340,
    "protein": 13,
    "carbs": 34,
    "fat": 17,
    "fibre": 4
  },
  {
    "name": "Peanut butter banana toast (1)",
    "calories": 260,
    "protein": 8,
    "carbs": 33,
    "fat": 11,
    "fibre": 4
  },
  {
    "name": "Avocado toast (1 slice)",
    "calories": 230,
    "protein": 6,
    "carbs": 24,
    "fat": 13,
    "fibre": 6
  },
  {
    "name": "Egg avocado toast (1 slice)",
    "calories": 300,
    "protein": 12,
    "carbs": 24,
    "fat": 18,
    "fibre": 6
  },
  {
    "name": "Mango yogurt bowl (1 bowl)",
    "calories": 210,
    "protein": 10,
    "carbs": 32,
    "fat": 5,
    "fibre": 2
  },
  {
    "name": "Papaya yogurt bowl (1 bowl)",
    "calories": 170,
    "protein": 9,
    "carbs": 24,
    "fat": 4,
    "fibre": 3
  },
  {
    "name": "Banana curd bowl (1 bowl)",
    "calories": 220,
    "protein": 9,
    "carbs": 36,
    "fat": 5,
    "fibre": 4
  },
  {
    "name": "Apple cinnamon oats (1 bowl)",
    "calories": 250,
    "protein": 9,
    "carbs": 43,
    "fat": 5,
    "fibre": 6
  },
  {
    "name": "Pear oats porridge (1 bowl)",
    "calories": 245,
    "protein": 9,
    "carbs": 42,
    "fat": 5,
    "fibre": 6
  },
  {
    "name": "Strawberry oats porridge (1 bowl)",
    "calories": 225,
    "protein": 9,
    "carbs": 37,
    "fat": 5,
    "fibre": 6
  },
  {
    "name": "Coconut oats porridge (1 bowl)",
    "calories": 280,
    "protein": 8,
    "carbs": 38,
    "fat": 11,
    "fibre": 5
  },
  {
    "name": "Soya oats porridge (1 bowl)",
    "calories": 255,
    "protein": 13,
    "carbs": 35,
    "fat": 7,
    "fibre": 6
  },
  {
    "name": "Ragi oats porridge (1 bowl)",
    "calories": 240,
    "protein": 8,
    "carbs": 39,
    "fat": 6,
    "fibre": 6
  },
  {
    "name": "Moong dal oats khichdi (1 cup)",
    "calories": 230,
    "protein": 11,
    "carbs": 33,
    "fat": 6,
    "fibre": 7
  },
  {
    "name": "Vegetable sattu soup (1 cup)",
    "calories": 160,
    "protein": 9,
    "carbs": 24,
    "fat": 3,
    "fibre": 6
  },
  {
    "name": "Dal palak soup (1 cup)",
    "calories": 145,
    "protein": 9,
    "carbs": 20,
    "fat": 3,
    "fibre": 6
  },
  {
    "name": "Chickpea spinach soup (1 cup)",
    "calories": 180,
    "protein": 10,
    "carbs": 27,
    "fat": 4,
    "fibre": 7
  },
  {
    "name": "Paneer tomato soup (1 cup)",
    "calories": 180,
    "protein": 11,
    "carbs": 13,
    "fat": 10,
    "fibre": 2
  },
  {
    "name": "Chicken spinach soup (1 cup)",
    "calories": 145,
    "protein": 18,
    "carbs": 7,
    "fat": 5,
    "fibre": 2
  },
  {
    "name": "Fish vegetable soup (1 cup)",
    "calories": 140,
    "protein": 18,
    "carbs": 8,
    "fat": 4,
    "fibre": 2
  },
  {
    "name": "Prawn vegetable soup (1 cup)",
    "calories": 135,
    "protein": 18,
    "carbs": 8,
    "fat": 3,
    "fibre": 2
  },
  {
    "name": "Tofu vegetable soup (1 cup)",
    "calories": 120,
    "protein": 10,
    "carbs": 10,
    "fat": 5,
    "fibre": 3
  },
  {
    "name": "Soya chunks soup (1 cup)",
    "calories": 155,
    "protein": 15,
    "carbs": 14,
    "fat": 4,
    "fibre": 5
  },
  {
    "name": "Curd smoothie unsweetened (1 glass)",
    "calories": 135,
    "protein": 8,
    "carbs": 13,
    "fat": 6,
    "fibre": 0
  },
  {
    "name": "Banana milkshake no sugar (1 glass)",
    "calories": 230,
    "protein": 9,
    "carbs": 39,
    "fat": 5,
    "fibre": 3
  },
  {
    "name": "Papaya milkshake no sugar (1 glass)",
    "calories": 180,
    "protein": 9,
    "carbs": 28,
    "fat": 5,
    "fibre": 2
  },
  {
    "name": "Apple milkshake no sugar (1 glass)",
    "calories": 200,
    "protein": 9,
    "carbs": 33,
    "fat": 5,
    "fibre": 3
  },
  {
    "name": "Pomegranate milkshake no sugar (1 glass)",
    "calories": 215,
    "protein": 9,
    "carbs": 36,
    "fat": 5,
    "fibre": 2
  },
  {
    "name": "Almond milkshake (1 glass)",
    "calories": 260,
    "protein": 10,
    "carbs": 26,
    "fat": 13,
    "fibre": 3
  },
  {
    "name": "Kesar milk (1 glass)",
    "calories": 170,
    "protein": 8,
    "carbs": 22,
    "fat": 6,
    "fibre": 0
  },
  {
    "name": "Masala milk (1 glass)",
    "calories": 190,
    "protein": 9,
    "carbs": 24,
    "fat": 7,
    "fibre": 1
  },
  {
    "name": "Unsweetened cocoa milk (1 glass)",
    "calories": 155,
    "protein": 9,
    "carbs": 17,
    "fat": 6,
    "fibre": 2
  },
  {
    "name": "Oats banana smoothie (1 glass)",
    "calories": 280,
    "protein": 11,
    "carbs": 48,
    "fat": 6,
    "fibre": 6
  },
  {
    "name": "Sattu banana smoothie (1 glass)",
    "calories": 290,
    "protein": 14,
    "carbs": 48,
    "fat": 6,
    "fibre": 7
  },
  {
    "name": "Peanut banana smoothie (1 glass)",
    "calories": 350,
    "protein": 13,
    "carbs": 42,
    "fat": 15,
    "fibre": 6
  },
  {
    "name": "Protein banana smoothie (1 glass)",
    "calories": 300,
    "protein": 24,
    "carbs": 39,
    "fat": 6,
    "fibre": 5
  },
  {
    "name": "Protein mango smoothie (1 glass)",
    "calories": 310,
    "protein": 24,
    "carbs": 41,
    "fat": 6,
    "fibre": 4
  },
  {
    "name": "Protein berry smoothie (1 glass)",
    "calories": 260,
    "protein": 24,
    "carbs": 29,
    "fat": 6,
    "fibre": 6
  },
  {
    "name": "Paneer vegetable bowl (1 bowl)",
    "calories": 350,
    "protein": 22,
    "carbs": 20,
    "fat": 20,
    "fibre": 5
  },
  {
    "name": "Tofu vegetable bowl (1 bowl)",
    "calories": 270,
    "protein": 19,
    "carbs": 22,
    "fat": 12,
    "fibre": 6
  },
  {
    "name": "Soya vegetable bowl (1 bowl)",
    "calories": 300,
    "protein": 25,
    "carbs": 25,
    "fat": 10,
    "fibre": 9
  },
  {
    "name": "Chicken vegetable bowl (1 bowl)",
    "calories": 340,
    "protein": 30,
    "carbs": 22,
    "fat": 14,
    "fibre": 6
  },
  {
    "name": "Fish vegetable bowl (1 bowl)",
    "calories": 310,
    "protein": 28,
    "carbs": 21,
    "fat": 12,
    "fibre": 6
  },
  {
    "name": "Egg vegetable bowl (1 bowl)",
    "calories": 290,
    "protein": 17,
    "carbs": 22,
    "fat": 15,
    "fibre": 6
  },
  {
    "name": "Sprouts vegetable bowl (1 bowl)",
    "calories": 240,
    "protein": 13,
    "carbs": 30,
    "fat": 7,
    "fibre": 9
  },
  {
    "name": "Chickpea vegetable bowl (1 bowl)",
    "calories": 310,
    "protein": 14,
    "carbs": 40,
    "fat": 10,
    "fibre": 11
  },
  {
    "name": "Rajma vegetable bowl (1 bowl)",
    "calories": 300,
    "protein": 15,
    "carbs": 41,
    "fat": 8,
    "fibre": 12
  },
  {
    "name": "Mixed dal vegetable bowl (1 bowl)",
    "calories": 290,
    "protein": 15,
    "carbs": 38,
    "fat": 8,
    "fibre": 12
  },
  {
    "name": "Oats vegetable bowl (1 bowl)",
    "calories": 260,
    "protein": 9,
    "carbs": 38,
    "fat": 8,
    "fibre": 8
  },
  {
    "name": "Millet vegetable bowl (1 bowl)",
    "calories": 290,
    "protein": 10,
    "carbs": 43,
    "fat": 8,
    "fibre": 8
  },
  {
    "name": "Quinoa vegetable bowl (1 bowl)",
    "calories": 320,
    "protein": 12,
    "carbs": 47,
    "fat": 9,
    "fibre": 9
  },
  {
    "name": "Brown rice vegetable bowl (1 bowl)",
    "calories": 320,
    "protein": 9,
    "carbs": 53,
    "fat": 8,
    "fibre": 7
  },
  {
    "name": "Paneer quinoa bowl (1 bowl)",
    "calories": 430,
    "protein": 24,
    "carbs": 45,
    "fat": 18,
    "fibre": 8
  },
  {
    "name": "Chicken quinoa bowl (1 bowl)",
    "calories": 410,
    "protein": 34,
    "carbs": 44,
    "fat": 11,
    "fibre": 8
  },
  {
    "name": "Tofu quinoa bowl (1 bowl)",
    "calories": 360,
    "protein": 23,
    "carbs": 46,
    "fat": 10,
    "fibre": 9
  },
  {
    "name": "Soya quinoa bowl (1 bowl)",
    "calories": 390,
    "protein": 28,
    "carbs": 46,
    "fat": 10,
    "fibre": 10
  },
  {
    "name": "Egg quinoa bowl (1 bowl)",
    "calories": 380,
    "protein": 21,
    "carbs": 44,
    "fat": 14,
    "fibre": 8
  },
  {
    "name": "Fish quinoa bowl (1 bowl)",
    "calories": 390,
    "protein": 32,
    "carbs": 44,
    "fat": 10,
    "fibre": 8
  },
  {
    "name": "Prawn quinoa bowl (1 bowl)",
    "calories": 370,
    "protein": 31,
    "carbs": 44,
    "fat": 8,
    "fibre": 8
  },
  {
    "name": "Chickpea quinoa salad (1 bowl)",
    "calories": 390,
    "protein": 16,
    "carbs": 58,
    "fat": 10,
    "fibre": 12
  },
  {
    "name": "Rajma quinoa salad (1 bowl)",
    "calories": 380,
    "protein": 17,
    "carbs": 56,
    "fat": 9,
    "fibre": 13
  },
  {
    "name": "Sprouts quinoa salad (1 bowl)",
    "calories": 350,
    "protein": 16,
    "carbs": 52,
    "fat": 8,
    "fibre": 12
  },
  {
    "name": "Paneer millet bowl (1 bowl)",
    "calories": 420,
    "protein": 23,
    "carbs": 45,
    "fat": 18,
    "fibre": 8
  },
  {
    "name": "Chicken millet bowl (1 bowl)",
    "calories": 400,
    "protein": 33,
    "carbs": 45,
    "fat": 11,
    "fibre": 8
  },
  {
    "name": "Tofu millet bowl (1 bowl)",
    "calories": 350,
    "protein": 22,
    "carbs": 47,
    "fat": 10,
    "fibre": 9
  },
  {
    "name": "Soya millet bowl (1 bowl)",
    "calories": 380,
    "protein": 27,
    "carbs": 47,
    "fat": 10,
    "fibre": 10
  },
  {
    "name": "Egg millet bowl (1 bowl)",
    "calories": 370,
    "protein": 20,
    "carbs": 45,
    "fat": 14,
    "fibre": 8
  },
  {
    "name": "Fish millet bowl (1 bowl)",
    "calories": 380,
    "protein": 31,
    "carbs": 45,
    "fat": 10,
    "fibre": 8
  },
  {
    "name": "Prawn millet bowl (1 bowl)",
    "calories": 360,
    "protein": 30,
    "carbs": 45,
    "fat": 8,
    "fibre": 8
  },
  {
    "name": "Chickpea millet salad (1 bowl)",
    "calories": 380,
    "protein": 15,
    "carbs": 58,
    "fat": 9,
    "fibre": 12
  },
  {
    "name": "Rajma millet salad (1 bowl)",
    "calories": 370,
    "protein": 16,
    "carbs": 56,
    "fat": 8,
    "fibre": 13
  },
  {
    "name": "Sprouts millet salad (1 bowl)",
    "calories": 340,
    "protein": 15,
    "carbs": 52,
    "fat": 7,
    "fibre": 12
  }
];
const storageKey = "indianFoodDiary.v1";
let state = loadState();
// Older diary data may not yet have the saved-meals feature.
if (!Array.isArray(state.savedMeals)) state.savedMeals = [];
let toastTimer;
function todayISO(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;}
function loadState(){
  try { const s=JSON.parse(localStorage.getItem(storageKey)); if(s && s.days) return s; } catch(e){}
  return {targets:{calories:2000,protein:75,carbs:250,fat:65},days:{},savedMeals:[]};
}
function saveState(){localStorage.setItem(storageKey,JSON.stringify(state));}
function currentDate(){return $("diaryDate").value || todayISO();}
function dayData(date=currentDate()){if(!state.days[date])state.days[date]={entries:[]};return state.days[date];}
function uid(){return `${Date.now()}-${Math.random().toString(16).slice(2)}`;}
function sum(entries){return entries.reduce((a,e)=>{for(const k of ["calories","protein","carbs","fat","fibre"])a[k]+=(Number(e[k])||0)*(Number(e.qty)||1);return a;},{calories:0,protein:0,carbs:0,fat:0,fibre:0});}
function fmt(n){return Math.round(n*10)/10;}
function clampPct(value,goal){return goal>0?Math.max(0,Math.min(100,value/goal*100)):0;}
// ISO dates are parsed at midday locally, avoiding UTC timezone date shifts.
function fromISO(value){return new Date(`${value}T12:00:00`);}
function shiftISO(value,delta){
  const d=fromISO(value);d.setDate(d.getDate()+delta);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function weekdayShort(value){return fromISO(value).toLocaleDateString("en-IN",{weekday:"short"});}
function chipDate(value){return fromISO(value).toLocaleDateString("en-IN",{day:"numeric",month:"short"});}
function renderDateStrip(value){
  const prev=shiftISO(value,-1),next=shiftISO(value,1);
  $("prevWeekday").textContent=weekdayShort(prev);
  $("prevDate").textContent=chipDate(prev);
  $("selectedWeekday").textContent=weekdayShort(value);
  $("dateLabel").textContent=chipDate(value);
  $("nextWeekday").textContent=weekdayShort(next);
  $("nextDate").textContent=chipDate(next);
  $("pickDate").setAttribute("aria-label",`Choose diary date, selected ${datePretty(value)}`);
  $("prevDay").setAttribute("aria-label",`Go to ${datePretty(prev)}`);
  $("nextDay").setAttribute("aria-label",`Go to ${datePretty(next)}`);
}
function datePretty(value){const d=new Date(`${value}T12:00:00`);return d.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"});}
function showToast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2400);}
function setBar(id,value,goal){$(id).style.width=`${clampPct(value,goal)}%`;}
function render(){
  const date=currentDate(), entries=dayData(date).entries, total=sum(entries), t=state.targets;
  renderDateStrip(date);
  $("caloriesEaten").textContent=`${Math.round(total.calories)} kcal eaten`;
  $("caloriesGoal").textContent=t.calories?`Goal ${t.calories.toLocaleString()} kcal`:"No goal yet";
  $("caloriePercent").textContent=t.calories?`${Math.round(total.calories/t.calories*100)}%`:"—";
  $("caloriesLeft").textContent=t.calories?`${Math.max(0,Math.round(t.calories-total.calories)).toLocaleString()} kcal left`:"Set a target";
  $("calorieSub").textContent=t.calories?(total.calories>t.calories?"You've reached your goal — progress is information, not a grade.":"Keep logging as you go"):"Add your daily calorie goal";
  $("calorieRing").style.setProperty("--progress",`${clampPct(total.calories,t.calories)*3.6}deg`);
  setBar("calorieTrack",total.calories,t.calories);
  for(const [key,label] of [["protein","Protein"],["carbs","Carbs"],["fat","Fat"]]){
    $(key==="fat"?"fatEaten":`${key}Eaten`).textContent=fmt(total[key]);
    $(key==="fat"?"fatGoal":`${key}Goal`).textContent=t[key]?`Goal ${t[key]} g`:"No target";
    $(key==="fat"?"fatLeft":`${key}Left`).textContent=t[key]?`${fmt(Math.max(0,t[key]-total[key]))} g left`:"Set goal";
    setBar(key==="fat"?"fatTrack":`${key}Track`,total[key],t[key]);
  }
  $("fibreEaten").textContent=fmt(total.fibre);
  renderMeals(entries);
}
function renderMeals(entries){
  const root=$("mealsList");root.innerHTML="";
  for(const meal of mealNames){
    const items=entries.filter(e=>e.meal===meal), total=sum(items), meta=mealMeta[meal];
    const card=document.createElement("article");card.className="meal-card"+(items.length?"":" is-empty");
    const head=document.createElement("div");head.className="meal-head";
    head.innerHTML=`<div class="meal-title"><span class="meal-emoji ${meta.cls}">${meta.emoji}</span><div><h3>${meal}</h3><p>${meta.hint}</p></div></div><div class="meal-kcal">${Math.round(total.calories)} <small>kcal</small></div>`;
    const add=document.createElement("button");add.className="add-food-button";add.textContent="＋ Add food";add.addEventListener("click",()=>openFoodDialog(meal));
    card.append(head,add);
    if(!items.length){const empty=document.createElement("div");empty.className="empty-state";empty.textContent="Nothing logged yet — add your first food 🌱";card.append(empty);}
    else items.forEach(e=>{
      const row=document.createElement("div");row.className="food-entry";
      const name=document.createElement("div");name.innerHTML=`<strong>${escapeHTML(e.name)}</strong><small>${fmt(e.qty)} serving${Number(e.qty)===1?"":"s"} · ${Math.round(e.calories*e.qty)} kcal</small>`;
      const right=document.createElement("div");right.style.textAlign="right";
      const kcal=document.createElement("div");kcal.className="entry-kcal";kcal.textContent=`${Math.round(e.calories*e.qty)} kcal`;
      const actions=document.createElement("div");actions.className="entry-actions";
      const edit=document.createElement("button");edit.textContent="Edit";edit.addEventListener("click",()=>openFoodDialog(meal,e.id));
      const del=document.createElement("button");del.textContent="Delete";del.addEventListener("click",()=>{dayData().entries=dayData().entries.filter(x=>x.id!==e.id);saveState();render();showToast("Food removed from your diary");});
      actions.append(edit,del);right.append(kcal,actions);row.append(name,right);card.append(row);
    });
    const macros=document.createElement("div");macros.className="meal-macros";macros.innerHTML=`<span>Protein <b>${fmt(total.protein)}g</b></span><span>Carbs <b>${fmt(total.carbs)}g</b></span><span>Fat <b>${fmt(total.fat)}g</b></span><span>Fibre <b>${fmt(total.fibre)}g</b></span>`;card.append(macros);root.append(card);
  }
}
function escapeHTML(str){return String(str).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function openFoodDialog(meal="Breakfast",id=""){
  $("foodForm").reset();$("foodMeal").value=meal;$("foodQty").value=1;$("foodEditId").value=id;$("foodSearch").value="";$("foodSuggestions").innerHTML="";
  $("foodDialogTitle").textContent=id?"Edit food":"Add food";
  if(id){const e=dayData().entries.find(x=>x.id===id);if(e){$("foodMeal").value=e.meal;$("foodName").value=e.name;$("foodQty").value=e.qty;$("foodCalories").value=e.calories;$("foodProtein").value=e.protein;$("foodCarbs").value=e.carbs;$("foodFat").value=e.fat;$("foodFibre").value=e.fibre;}}
  $("foodDialog").showModal();setTimeout(()=>$("foodSearch").focus(),50);
}
function chooseFood(food){
  $("foodName").value=food.name;$("foodCalories").value=food.calories;$("foodProtein").value=food.protein;$("foodCarbs").value=food.carbs;$("foodFat").value=food.fat;$("foodFibre").value=food.fibre;
  $("foodSuggestions").innerHTML="";showToast(`${food.name} selected — check the portion and values`);
}
function renderSuggestions(){
  const q=$("foodSearch").value.trim().toLowerCase(), box=$("foodSuggestions");box.innerHTML="";
  if(!q)return;
  const matches=foods.filter(f=>f.name.toLowerCase().includes(q)).slice(0,7);
  matches.forEach(f=>{const b=document.createElement("button");b.type="button";b.className="suggestion";b.textContent=`${f.name} · ${f.calories} kcal`;b.addEventListener("click",()=>chooseFood(f));box.append(b);});
  if(!matches.length){const p=document.createElement("span");p.className="muted small";p.textContent="No quick match — enter your food and nutrition values below.";box.append(p);}
}
$("foodSearch").addEventListener("input",renderSuggestions);
$("foodForm").addEventListener("submit",e=>{
  e.preventDefault();
  const id=$("foodEditId").value;
  const entry={id:id||uid(),meal:$("foodMeal").value,name:$("foodName").value.trim(),qty:Number($("foodQty").value),calories:Number($("foodCalories").value),protein:Number($("foodProtein").value),carbs:Number($("foodCarbs").value),fat:Number($("foodFat").value),fibre:Number($("foodFibre").value)};
  if(!entry.name||entry.qty<=0)return;
  const list=dayData().entries;
  if(id){const i=list.findIndex(x=>x.id===id);if(i>=0)list[i]=entry;}else list.push(entry);
  saveState();$("foodDialog").close();render();showToast(id?"Food updated":"Food added to your diary");
});
function openTargets(){
  for(const k of ["calories","protein","carbs","fat"])$(`target${k[0].toUpperCase()+k.slice(1)}`).value=state.targets[k]||"";
  $("targetsDialog").showModal();
}
$("targetsForm").addEventListener("submit",e=>{
  e.preventDefault();
  for(const k of ["calories","protein","carbs","fat"]){const v=Number($(`target${k[0].toUpperCase()+k.slice(1)}`).value);state.targets[k]=v>0?v:0;}
  saveState();$("targetsDialog").close();render();showToast("Daily targets saved");
});
function showInfo(title,body){$("infoTitle").textContent=title;$("infoBody").innerHTML=body;$("infoDialog").showModal();}
function totalsInfo(){
  const total=sum(dayData().entries);
  showInfo("Food totals",`<div class="info-row"><span>Calories</span><strong>${Math.round(total.calories)} kcal</strong></div><div class="info-row"><span>Protein</span><strong>${fmt(total.protein)} g</strong></div><div class="info-row"><span>Carbohydrates</span><strong>${fmt(total.carbs)} g</strong></div><div class="info-row"><span>Fat</span><strong>${fmt(total.fat)} g</strong></div><div class="info-row"><span>Fibre</span><strong>${fmt(total.fibre)} g</strong></div><p class="muted small" style="margin-top:14px">Estimates depend on portion size and recipe. For packaged foods, use the nutrition label when available.</p>`);
}
$("targetsBtn").addEventListener("click",openTargets);$("settingsBtn").addEventListener("click",openTargets);
$("addFoodTop").addEventListener("click",()=>openFoodDialog("Breakfast"));
$("foodTotalsBtn").addEventListener("click",totalsInfo);
// Saved meals: save a breakfast/lunch/snack/dinner combination for quick reuse.
// The original food entries and daily totals are not changed by saving a meal.
function renderSavedMealsModal() {
  const body = $("infoBody");
  const selectedDate = currentDate();
  const mealOptions = mealNames.map(meal =>
    `<option value="${meal}">${meal}</option>`
  ).join("");

  const savedCards = state.savedMeals.length
    ? state.savedMeals.map(meal => {
        const entries = Array.isArray(meal.entries) ? meal.entries : [];
        const total = sum(entries);
        return `<div style="padding:12px 0;border-bottom:1px solid #e5e7eb">
          <div style="font-weight:700;overflow-wrap:anywhere">${escapeHTML(meal.name)}</div>
          <div class="muted small" style="margin:4px 0 10px">
            ${entries.length} food item${entries.length===1?"":"s"} · ${Math.round(total.calories)} kcal
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
            <label class="small" for="meal-destination-${escapeHTML(meal.id)}">Add to</label>
            <select id="meal-destination-${escapeHTML(meal.id)}" data-destination="${escapeHTML(meal.id)}"
              style="flex:1;min-width:100px;padding:8px;border:1px solid #ddd;border-radius:8px">
              ${mealNames.map(name => `<option value="${name}" ${name===meal.category?"selected":""}>${name}</option>`).join("")}
            </select>
            <button type="button" class="primary-button" data-add-saved="${escapeHTML(meal.id)}">Add</button>
            <button type="button" data-delete-saved="${escapeHTML(meal.id)}">Delete</button>
          </div>
        </div>`;
      }).join("")
    : `<p class="muted small">No saved meals yet. Log foods under Breakfast, Lunch, Snacks or Dinner, then save that combination here.</p>`;

  $("infoTitle").textContent = "My saved meals";
  body.innerHTML = `
    <p class="muted small">Save foods from <strong>${escapeHTML(datePretty(selectedDate))}</strong>
       and reuse them on any date.</p>
    <div style="display:grid;gap:8px;margin:12px 0 14px">
      <label for="saveMealCategory">Which meal should be saved?</label>
      <select id="saveMealCategory" style="padding:10px;border:1px solid #ddd;border-radius:8px">
        ${mealOptions}
      </select>
      <label for="savedMealName">Saved meal name</label>
      <input id="savedMealName" type="text" maxlength="80"
        placeholder="e.g. Poha and tea" style="width:100%;box-sizing:border-box;padding:10px;border:1px solid #ddd;border-radius:8px">
      <button type="button" class="primary-button" id="saveCurrentMealBtn">Save this meal</button>
    </div>
    <h3 style="margin:16px 0 8px">Your saved meals (${state.savedMeals.length})</h3>
    ${savedCards}
    <p class="muted small" style="margin-top:16px">Saved meals are stored only in this browser on this device.</p>`;

  if (!$("infoDialog").open) $("infoDialog").showModal();

  $("saveCurrentMealBtn").addEventListener("click", () => {
    const name = $("savedMealName").value.trim();
    const category = $("saveMealCategory").value;
    const entries = (dayData().entries || []).filter(e => e.meal === category);
    if (!name) { showToast("Enter a name for your saved meal"); return; }
    if (!entries.length) {
      showToast(`No foods logged under ${category} on this date`);
      return;
    }

    state.savedMeals.push({
      id: uid(),
      name,
      category,
      // Separate copies: editing a diary entry won't change saved meal nutrition.
      entries: entries.map(({id, ...e}) => ({...e}))
    });
    saveState();
    renderSavedMealsModal();
    showToast("Meal saved for future use");
  });

  body.querySelectorAll("[data-add-saved]").forEach(button => {
    button.addEventListener("click", () => {
      const saved = state.savedMeals.find(meal => meal.id === button.dataset.addSaved);
      if (!saved || !Array.isArray(saved.entries) || !saved.entries.length) return;
      const category = body.querySelector(`[data-destination="${button.dataset.addSaved}"]`).value;
      dayData().entries.push(...saved.entries.map(e => ({...e, id: uid(), meal: category})));
      saveState();
      render();
      $("infoDialog").close();
      showToast("Saved meal added to your diary");
    });
  });

  body.querySelectorAll("[data-delete-saved]").forEach(button => {
    button.addEventListener("click", () => {
      const saved = state.savedMeals.find(meal => meal.id === button.dataset.deleteSaved);
      if (!saved) return;
      if (!confirm(`Delete saved meal "${saved.name}"? This won't remove food already logged.`)) return;
      state.savedMeals = state.savedMeals.filter(meal => meal.id !== saved.id);
      saveState();
      renderSavedMealsModal();
      showToast("Saved meal deleted");
    });
  });
}
$("savedMealsBtn").addEventListener("click", renderSavedMealsModal);

// Copy foods from the immediately preceding calendar date.
// Ask permission rather than silently replacing the selected day's entries.
$("copyYesterdayBtn").addEventListener("click", () => {
  const date = new Date(`${currentDate()}T12:00:00`);
  date.setDate(date.getDate() - 1);
  const previousDate = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
  const source = state.days[previousDate]?.entries || [];
  if (!source.length) {
    showToast("No foods recorded on the previous day");
    return;
  }
  const currentEntries = dayData().entries;
  if (currentEntries.length && !confirm(
    "This day already has foods logged. Replace them with the previous day's foods?"
  )) return;

  dayData().entries = source.map(e => ({...e, id: uid()}));
  saveState();
  render();
  showToast("Previous day's foods copied successfully");
});
$("diaryDate").value=todayISO();
$("diaryDate").addEventListener("change",render);
function shiftDate(delta){$("diaryDate").value=shiftISO(currentDate(),delta);render();}
$("prevDay").addEventListener("click",()=>shiftDate(-1));$("nextDay").addEventListener("click",()=>shiftDate(1));
$("pickDate").addEventListener("click",()=>{
  const input=$("diaryDate");
  try { if(typeof input.showPicker==="function") input.showPicker(); else input.click(); }
  catch(e){input.focus();input.click();}
});
document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",()=>$(b.dataset.close).close()));
$("calorieRing").addEventListener("click",openTargets);
render();
