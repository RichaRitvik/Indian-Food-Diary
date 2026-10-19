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

// v2 app shell. Keep the v1 key so existing diaries and saved meals remain intact.
const storageKey = 'indianFoodDiary.v1';
const $ = id => document.getElementById(id);
const mealNames = ['Breakfast', 'Lunch', 'Snacks', 'Dinner'];
const mealIcons = {Breakfast:'☀',Lunch:'◒',Snacks:'◌',Dinner:'☾'};
const metrics = ['calories','protein','carbs','fat','fibre'];
const emptyTotals = () => ({calories:0,protein:0,carbs:0,fat:0,fibre:0});
const defaultTargets={calories:2000,protein:75,carbs:250,fat:65,fibre:30};
let state=loadState();
let selectedDate=todayISO();
let currentView='diary';
let currentInsight='daily';
let insightDate=selectedDate;
let editingAbout=false, editingTargets=false;
let selectedFood=null;
let customMode=false;
let expandedMeal='';
let toastTimer;
const dataFoods = foods.map(f=>({...f,source:'catalogue'}));

function loadState(){
  try{
    const raw=JSON.parse(localStorage.getItem(storageKey));
    if(raw && raw.days && typeof raw.days==='object'){
      raw.targets={...defaultTargets,...(raw.targets||{})};
      raw.savedMeals=Array.isArray(raw.savedMeals)?raw.savedMeals:[];
      raw.savedFoods=Array.isArray(raw.savedFoods)?raw.savedFoods:[];
      raw.customFoods=Array.isArray(raw.customFoods)?raw.customFoods:[];
      raw.profile=(raw.profile&&typeof raw.profile==='object')?raw.profile:{};
      raw.weights=(raw.weights&&typeof raw.weights==='object'&&!Array.isArray(raw.weights))?raw.weights:{};
      for(const day of Object.values(raw.days)){
        if(day&&typeof day==='object'){
          if(!Array.isArray(day.entries))day.entries=[];
          if(typeof day.complete!=='boolean')day.complete=false;
        }
      }
      return raw;
    }
  }catch(err){console.warn('Diary could not be read',err);}
  return {targets:{...defaultTargets},days:{},savedMeals:[],savedFoods:[],customFoods:[],profile:{},weights:{}};
}
function saveState(){
  try{localStorage.setItem(storageKey,JSON.stringify(state));return true;}
  catch(err){toast('Browser storage is full. Export your diary backup.');return false;}
}
function todayISO(){const d=new Date();return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;}
function pad(n){return String(n).padStart(2,'0');}
function fromISO(v){return new Date(`${v}T12:00:00`);}
function shiftISO(v,delta){const d=fromISO(v);d.setDate(d.getDate()+delta);return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;}
function datePretty(v){return fromISO(v).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});}
function weekday(v){return fromISO(v).toLocaleDateString('en-IN',{weekday:'short'});}
function shortDate(v){return fromISO(v).toLocaleDateString('en-IN',{day:'numeric',month:'short'});}
function n(v){const value=Number(v);return Number.isFinite(value)?value:0;}
function fmt(v){return (Math.round(n(v)*10)/10).toLocaleString('en-IN',{maximumFractionDigits:1});}
function uid(){return `${Date.now()}-${Math.random().toString(16).slice(2)}`;}
function escapeHTML(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function dayData(date=selectedDate){if(!state.days[date])state.days[date]={entries:[],complete:false};return state.days[date];}
function readDay(date){const d=state.days[date];return d&&Array.isArray(d.entries)?d:{entries:[],complete:false};}
function sum(entries){return entries.reduce((acc,e)=>{const q=n(e.qty)>0?n(e.qty):1;metrics.forEach(k=>acc[k]+=n(e[k])*q);return acc;},emptyTotals());}
function pct(val,target){return n(target)>0?Math.max(0,Math.min(100,n(val)/n(target)*100)):0;}
function toast(msg){const node=$('toast');node.textContent=msg;node.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('show'),2700);}
function markEdited(){dayData().complete=false;}
function getFoods(){return [...state.customFoods.map(f=>({...f,source:'my'})),...dataFoods];}

// Navigation. Only one global Add Food control; no per-meal add buttons.
function navigate(view){
  currentView=view;
  ['diary','insights','profile'].forEach(v=>{
    $(`${v}View`).hidden=v!==view;
    $(`nav${v[0].toUpperCase()+v.slice(1)}`).classList.toggle('active',v===view);
  });
  if(view==='insights')renderInsights();
  if(view==='profile')renderProfile();
  window.scrollTo({top:0,behavior:'instant'});
}
$('navDiary').addEventListener('click',()=>navigate('diary'));
$('navInsights').addEventListener('click',()=>{insightDate=selectedDate;navigate('insights');});
$('navProfile').addEventListener('click',()=>navigate('profile'));
$('headerProfile').addEventListener('click',()=>navigate('profile'));
$('addFoodBtn').addEventListener('click',()=>openFoodDialog());
function setDate(date){if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||Number.isNaN(fromISO(date).getTime()))return;selectedDate=date;$('diaryDate').value=date;expandedMeal='';render();}
$('prevDay').addEventListener('click',()=>setDate(shiftISO(selectedDate,-1)));
$('nextDay').addEventListener('click',()=>setDate(shiftISO(selectedDate,1)));
$('pickDate').addEventListener('click',()=>{const el=$('diaryDate');try{if(el.showPicker)el.showPicker();else el.click();}catch(e){el.focus();el.click();}});
$('diaryDate').addEventListener('change',()=>setDate($('diaryDate').value));
function renderDate(){
  $('selectedWeekday').textContent=weekday(selectedDate);
  $('dateLabel').textContent=datePretty(selectedDate);
  const drop=document.createElement('span');drop.className='picker-chevron';drop.setAttribute('aria-hidden','true');drop.textContent='⌄';
  $('dateLabel').append(drop);
  $('diaryDate').value=selectedDate;
}

function render(){
  renderDate();
  const entries=readDay(selectedDate).entries,total=sum(entries),t=state.targets;
  $('caloriesEaten').textContent=Math.round(total.calories).toLocaleString('en-IN');
  const delta=n(t.calories)-total.calories;
  $('caloriesRemaining').textContent=n(t.calories)>0?`${Math.round(Math.abs(delta)).toLocaleString('en-IN')} kcal`:'—';
  $('budgetLabel').textContent=n(t.calories)>0?(delta<0?'above target':'remaining'):'set a target';
  $('calorieStatus').textContent=n(t.calories)>0?`Target ${fmt(t.calories)} kcal`:'Set your target in Profile';
  $('calorieTrack').style.width=`${pct(total.calories,t.calories)}%`;
  for(const key of ['protein','carbs','fat','fibre']){
    $(`${key}Value`).innerHTML=`${fmt(total[key])} <small>g</small>`;
    $(`${key}Goal`).textContent=n(t[key])>0?`${fmt(t[key])} g goal`:'No goal';
    $(`${key}Track`).style.width=`${pct(total[key],t[key])}%`;
  }
  $('entryCount').textContent=`${entries.length} food${entries.length===1?'':'s'}`;
  const complete=readDay(selectedDate).complete;
  $('dayCompleteTitle').textContent=complete?'Day marked complete':'Finished logging?';
  $('dayCompleteHint').textContent=complete?'You can reopen it to add or edit foods.':'Get your daily analysis after logging your meals.';
  $('completeDayBtn').textContent=complete?'Reopen':'Finish day →';
  renderMeals(entries);
  if(currentView==='insights')renderInsights();
}

function entryAmountLabel(entry){
  if(n(entry.amount)>0 && ['g','ml','portion','cup','glass','piece'].includes(entry.unit)){
    const unit=entry.unit;
    const units={portion:['listed serving','listed servings'],piece:['piece','pieces'],cup:['cup','cups'],glass:['glass','glasses']};
    return `${fmt(entry.amount)} ${units[unit]?(n(entry.amount)===1?units[unit][0]:units[unit][1]):unit}`;
  }
  return `${fmt(n(entry.qty)>0?entry.qty:1)} serving${n(entry.qty)===1?'':'s'}`;
}

function metaFor(food){
  if(!food)return {weight:0,unit:''};
  if(n(food.portionWeight)>0 && ['g','ml'].includes(food.portionUnit))return {weight:n(food.portionWeight),unit:food.portionUnit};
  // Only numeric gram/ml values explicitly present in source food names are safe to convert.
  const part=(food.name||'').match(/\(([^)]*)\)/)?.[1]||'';
  const m=part.match(/(\d+(?:\.\d+)?)\s*(g|kg|ml|l)\b/i);
  if(!m)return {weight:0,unit:''};
  const raw=n(m[1]),unit=m[2].toLowerCase();
  return {weight:unit==='kg'||unit==='l'?raw*1000:raw,unit:unit==='kg'?'g':unit==='l'?'ml':unit};
}
function fractionNumber(raw){
  const t=String(raw).trim();if(/^\d+\s*\/\s*\d+$/.test(t)){const [a,b]=t.split('/').map(Number);return b?a/b:0;}
  return n(t);
}
function householdReference(food,unit){
  if(!food||!['cup','glass','piece'].includes(unit))return 0;
  if(food.measureReference?.unit===unit&&n(food.measureReference.amount)>0)return n(food.measureReference.amount);
  const part=(food.name||'').match(/\(([^)]*)\)/)?.[1]?.trim()||'';
  if(!part)return 0;
  const quantity='(\\d+(?:\\.\\d+)?|\\d+\\s*\\/\\s*\\d+)';
  let m;
  if(unit==='cup')m=part.match(new RegExp('^'+quantity+'\\s*cups?\\b','i'));
  else if(unit==='glass')m=part.match(new RegExp('^'+quantity+'\\s*glass(?:es)?\\b','i'));
  else {
    m=part.match(new RegExp('^'+quantity+'\\s*(?:pieces?|medium|large|small|idlis?|chillas?|eggs?|slices?|kernels?|halves?|nests?|bananas?|apples?)\\b','i'));
    if(!m)m=part.match(new RegExp('^'+quantity+'$','i'));
  }
  return m?fractionNumber(m[1]):0;
}
function unitReference(food,unit){
  if(unit==='g'||unit==='ml'){
    const meta=metaFor(food);return meta.unit===unit?meta.weight:0;
  }
  return householdReference(food,unit);
}
function storedHouseholdSize(food){
  return {size:n(food?.householdSize),unit:['g','ml'].includes(food?.householdSizeUnit)?food.householdSizeUnit:''};
}
function saveFavoriteFood(food,entry=null){
  if(!food||!food.name)return;
  const reference=metaFor(entry||food);
  const favorite={id:uid(),name:food.name,...Object.fromEntries(metrics.map(k=>[k,n(food[k])])),portionWeight:reference.weight||undefined,portionUnit:reference.unit||undefined,
    measureReference:entry?.measureReference||food.measureReference,householdSize:entry?.householdSize||food.householdSize,householdSizeUnit:entry?.householdSizeUnit||food.householdSizeUnit,
    amount:entry?.amount??entry?.qty??1,unit:entry?.unit??'portion',qty:entry?.qty??1};
  const old=state.savedFoods.findIndex(f=>f.name.toLowerCase()===favorite.name.toLowerCase());
  if(old>=0)favorite.id=state.savedFoods[old].id;
  if(old>=0)state.savedFoods[old]=favorite;else state.savedFoods.unshift(favorite);
  saveState();toast('Individual food saved to Saved Foods');
}

function renderMeals(entries){
  $('mealsList').innerHTML=mealNames.map(meal=>{
    const items=entries.filter(e=>e.meal===meal),total=sum(items),open=expandedMeal===meal;
    const rows=items.length?items.map(e=>`<div class="food-line"><div><strong>${escapeHTML(e.name)}</strong><small>${escapeHTML(entryAmountLabel(e))} · ${fmt(n(e.protein)*n(e.qty))} g protein</small></div><div class="food-line-right"><b>${Math.round(n(e.calories)*n(e.qty))} kcal</b><div class="entry-actions"><button type="button" data-save="${escapeHTML(e.id)}" aria-label="Save ${escapeHTML(e.name)} to saved foods">☆ Save</button><button type="button" data-edit="${escapeHTML(e.id)}">Edit</button><button type="button" class="delete" data-delete="${escapeHTML(e.id)}">Delete</button></div></div></div>`).join(''):'<p class="meal-empty">No foods logged yet</p>';
    return `<div class="meal-row ${open?'expanded':''}"><button class="meal-row-head" type="button" data-meal="${meal}" aria-expanded="${open}"><span class="meal-left"><span class="meal-icon">${mealIcons[meal]}</span><span><strong>${meal}</strong><span class="meta">${items.length} food${items.length===1?'':'s'}</span></span></span><span class="meal-right">${Math.round(total.calories)} kcal <span class="chevron">›</span></span></button><div class="meal-contents" ${open?'':'hidden'}>${rows}</div></div>`;
  }).join('');
  $('mealsList').querySelectorAll('[data-meal]').forEach(btn=>btn.addEventListener('click',()=>{expandedMeal=expandedMeal===btn.dataset.meal?'':btn.dataset.meal;renderMeals(readDay(selectedDate).entries);}));
  $('mealsList').querySelectorAll('[data-save]').forEach(btn=>btn.addEventListener('click',()=>{
    const entry=readDay(selectedDate).entries.find(e=>e.id===btn.dataset.save);if(entry)saveFavoriteFood(entry,entry);
  }));
  $('mealsList').querySelectorAll('[data-edit]').forEach(btn=>btn.addEventListener('click',()=>openFoodDialog(btn.closest('.meal-row').querySelector('[data-meal]').dataset.meal,btn.dataset.edit)));
  $('mealsList').querySelectorAll('[data-delete]').forEach(btn=>btn.addEventListener('click',()=>{
    dayData().entries=dayData().entries.filter(e=>e.id!==btn.dataset.delete);
    markEdited();saveState();render();toast('Food removed');
  }));
}
$('completeDayBtn').addEventListener('click',()=>{
  const day=dayData();if(!day.complete&&!day.entries.length){toast('Log at least one food before finishing.');return;}
  day.complete=!day.complete;saveState();render();if(day.complete){insightDate=selectedDate;currentInsight='daily';updateInsightsTabs();navigate('insights');}else toast('Day reopened for editing');
});

// Search-first logging. Each entry retains per-portion nutrients and its original servings ratio.
function openFoodDialog(meal='Breakfast',editId='',favorite=null){
  selectedFood=null;customMode=false;
  $('foodForm').reset();$('foodMeal').value=meal;$('foodQty').value='1';$('foodUnit').value='portion';$('portionWeight').value='';$('portionWeight').dataset.unit='';$('householdSize').value='';$('householdSizeUnit').value='g';
  $('foodEditId').value=editId;$('selectedFoodHint').hidden=true;$('foodSearch').value='';
  $('foodDialogTitle').textContent=editId?'Edit food':'Add food';$('saveFoodBtn').textContent=editId?'Save changes':'Add to diary';
  $('saveFavorite').checked=false;$('customFields').hidden=true;$('customFoodToggle').textContent='＋ Can\'t find it? Create your own food';
  const existing=editId?readDay(selectedDate).entries.find(e=>e.id===editId):null;
  if(existing){
    selectedFood={...existing};$('foodSearch').value=existing.name;$('foodMeal').value=existing.meal;
    const amount=n(existing.amount)>0?n(existing.amount):n(existing.qty)||1;
    $('foodQty').value=amount;$('foodUnit').value=existing.unit||'portion';
    $('portionWeight').value=unitReference(existing,existing.unit)||'';$('portionWeight').dataset.unit=existing.unit||'';
    $('householdSize').value=n(existing.householdSize)||'';$('householdSizeUnit').value=existing.householdSizeUnit||'g';
    // Old entries keep nutrients and quantity exactly; users can still edit all 5 values if required.
    setCustomMode(true);fillCustomFields(existing);$('saveCustomFood').checked=false;
  }else if(favorite){
    selectedFood={...favorite};$('foodSearch').value=favorite.name;
    $('foodQty').value=n(favorite.amount)||1;
    $('foodUnit').value=['portion','piece','cup','glass','g','ml'].includes(favorite.unit)?favorite.unit:'portion';
    $('portionWeight').value=unitReference(favorite,$('foodUnit').value)||'';$('portionWeight').dataset.unit=$('foodUnit').value;
    $('householdSize').value=n(favorite.householdSize)||'';$('householdSizeUnit').value=favorite.householdSizeUnit||'g';
    fillCustomFields(favorite);
  }
  showSuggestions();if(selectedFood)showSelectedFood();updatePortionUI();
  $('foodDialog').showModal();if(!selectedFood)setTimeout(()=>$('foodSearch').focus(),60);
}
function setCustomMode(on){
  customMode=on;$('customFields').hidden=!on;
  $('customFoodToggle').textContent=on?'− Hide nutrition fields':'+ Can\'t find it? Create your own food';
  if(on){$('foodName').value=$('foodName').value||$('foodSearch').value.trim();}
  updatePortionUI();
}
function fillCustomFields(food){
  for(const [field,k] of [['foodName','name'],['foodCalories','calories'],['foodProtein','protein'],['foodCarbs','carbs'],['foodFat','fat'],['foodFibre','fibre']])$(field).value=food[k]??'';
}
function showSelectedFood(){
  const food=selectedFood;$('selectedFoodHint').hidden=!food;
  if(food)$('selectedFoodHint').textContent=`✓ ${food.name} · ${fmt(food.calories)} kcal per listed serving`;
}
function chooseFood(food){
  selectedFood={...food};$('foodSearch').value=food.name;fillCustomFields(food);setCustomMode(false);
  $('foodUnit').value='portion';$('foodQty').value='1';$('portionWeight').value='';$('portionWeight').dataset.unit='';$('householdSize').value=food.householdSize||'';$('householdSizeUnit').value=food.householdSizeUnit||'g';
  $('foodSuggestions').replaceChildren();showSelectedFood();updatePortionUI();
}
function showSuggestions(){
  const q=$('foodSearch').value.trim().toLowerCase();
  $('foodSuggestions').replaceChildren();$('selectedFoodHint').hidden=true;
  if(!q){const el=document.createElement('p');el.className='empty-message';el.textContent='Search the food catalogue, or create a custom food.';$('foodSuggestions').append(el);return;}
  const matches=getFoods().filter(f=>f.name.toLowerCase().includes(q)).slice(0,9);
  if(!matches.length){const msg=document.createElement('p');msg.className='empty-message';msg.textContent='No match? Create your own food below.';$('foodSuggestions').append(msg);return;}
  for(const food of matches){
    const b=document.createElement('button');b.type='button';b.className='suggestion';
    const name=document.createElement('span');name.textContent=`${food.source==='my'?'★ ':''}${food.name}`;
    const kc=document.createElement('small');kc.textContent=`${fmt(food.calories)} kcal/serving`;
    b.append(name,kc);b.addEventListener('click',()=>chooseFood(food));$('foodSuggestions').append(b);
  }
}
function getFormFood(){
  if(!customMode)return selectedFood;
  const food={name:$('foodName').value.trim(),...Object.fromEntries(metrics.map(k=>[k,n($(`food${k[0].toUpperCase()+k.slice(1)}`).value)]))};
  if(selectedFood && selectedFood.name===food.name){for(const key of ['portionWeight','portionUnit','measureReference','householdSize','householdSizeUnit'])if(selectedFood[key]!==undefined)food[key]=selectedFood[key];}
  return food;
}
function calculatedPortions(food){
  const amount=n($('foodQty').value),unit=$('foodUnit').value;
  if(amount<=0)return null;
  const inputReference=n($('portionWeight').value);
  if(unit==='portion')return {ratio:amount,amount,unit,portionWeight:metaFor(food).weight||0,portionUnit:metaFor(food).unit||'',referenceAmount:1};
  const known=unitReference(food,unit),supplied=$('portionWeight').dataset.unit===unit?inputReference:0;
  const household=['cup','glass'].includes(unit);
  const measured=n($('householdSize').value),measuredUnit=$('householdSizeUnit').value;
  const meta=metaFor(food);
  const inferredByWeight=household&&measured>0&&meta.weight>0&&meta.unit===measuredUnit;
  const reference=inferredByWeight?meta.weight/measured:(known||supplied);
  if(reference<=0)return null;
  // Use an explicit cup/glass measurement for unit conversion only if the user actually supplied it.
  let portionWeight=metaFor(food).weight,portionUnit=metaFor(food).unit;
  const container=n($('householdSize').value),sizeUnit=$('householdSizeUnit').value;
  if(household&&container>0&&['g','ml'].includes(sizeUnit)){
    portionWeight=reference*container;portionUnit=sizeUnit;
  }
  if(['g','ml'].includes(unit)){portionWeight=reference;portionUnit=unit;}
  return {ratio:amount/reference,amount,unit,referenceAmount:reference,portionWeight,portionUnit};
}
function updatePortionUI(){
  const food=getFormFood(),unit=$('foodUnit').value,amount=n($('foodQty').value);
  const known=unitReference(food,unit)>0;
  const measured=n($('householdSize').value),measuredUnit=$('householdSizeUnit').value,metaForUnit=metaFor(food);
  const canDerive=['cup','glass'].includes(unit)&&measured>0&&metaForUnit.weight>0&&metaForUnit.unit===measuredUnit;
  const weightBlock=$('portionWeightBlock');
  weightBlock.hidden=unit==='portion'||known||canDerive;
  const names={portion:'Listed servings',g:'Grams (g)',ml:'Millilitres (ml)',cup:'Cups',glass:'Glasses',piece:'Pieces / numbers'};
  $('portionWeightLabel').firstChild.textContent=`${names[unit]||'Units'} in one listed serving `;
  $('portionWeightHelp').textContent=unit==='g'||unit==='ml'
    ?`Enter how many ${unit} make up ONE listed serving. This is needed to calculate from ${unit}.`
    :`How many ${names[unit].toLowerCase()} make up ONE listed serving? Enter the actual number if it isn't given.`;
  if(unit!=='portion'&&known){$('portionWeight').value=unitReference(food,unit);$('portionWeight').dataset.unit=unit;}
  const household=['cup','glass'].includes(unit);
  $('householdSizeBlock').hidden=!household;
  $('householdType').textContent=unit;
  $('householdSizeHelp').textContent=unit==='cup'
    ?'Enter grams (g) or volume (ml) for YOUR cup if known. Without a listed cup reference, this or a measured equivalent is needed; food densities vary.'
    :'Enter the measured ml (or grams) in YOUR glass if known. Without a listed glass reference, this or a measured equivalent is needed.';
    const part=food?.name?.match(/\(([^)]*)\)/)?.[1]||'listed serving';
  const explicit=/\d+(?:\.\d+)?\s*(g|kg|ml|l)\b/i.test(part);
  const meta=metaFor(food);
  const direct=`${meta.weight?` · ${fmt(meta.weight)} ${meta.unit}${explicit?' listed':' user supplied'}`:''}`;
  $('portionReference').textContent=food?`Database serving: ${part}${direct}${!meta.weight?' · weight/volume not provided':''}`:'Select a food from the list or create your own.';
  const portions=food?calculatedPortions(food):null;
  if(!food?.name||!amount){$('portionPreview').textContent='Select a food and enter an amount to see estimated nutrition.';return;}
  if(!portions){$('portionPreview').textContent=`Enter the number of ${unit==='g'?'grams':unit==='ml'?'millilitres':unit==='piece'?'pieces':unit==='glass'?'glasses':'cups'} in one listed serving to calculate. No conversion is guessed.`;return;}
  const namesSing={portion:'listed serving',piece:'piece',cup:'cup',glass:'glass'};
  const pluralUnits={portion:'listed servings',piece:'pieces',cup:'cups',glass:'glasses'};
  const showUnit=namesSing[unit]?(amount===1?namesSing[unit]:pluralUnits[unit]):unit;
  const size=n($('householdSize').value),sizeUnit=$('householdSizeUnit').value;
  const detail=household&&size>0?` · 1 ${unit} = ${fmt(size)} ${sizeUnit} (your measurement)` : household?' · cup/glass size not yet measured':'';
  $('portionPreview').textContent=`${fmt(amount)} ${showUnit} = ${fmt(portions.ratio)} listed serving(s)${detail} · ${fmt(n(food.calories)*portions.ratio)} kcal · protein ${fmt(n(food.protein)*portions.ratio)} g · carbs ${fmt(n(food.carbs)*portions.ratio)} g · fat ${fmt(n(food.fat)*portions.ratio)} g · fibre ${fmt(n(food.fibre)*portions.ratio)} g`;
}
$('foodSearch').addEventListener('input',()=>{selectedFood=null;if(customMode)$('foodName').value=$('foodSearch').value;showSuggestions();updatePortionUI();});
$('customFoodToggle').addEventListener('click',()=>{
  const next=!customMode;setCustomMode(next);
  if(next){if(selectedFood)fillCustomFields(selectedFood);else $('foodName').value=$('foodSearch').value.trim();}
  updatePortionUI();
});
$('foodUnit').addEventListener('change',()=>{$('portionWeight').value='';$('portionWeight').dataset.unit='';$('householdSize').value='';$('householdSizeUnit').value=$('foodUnit').value==='glass'?'ml':'g';updatePortionUI();});
$('portionWeight').addEventListener('input',()=>{$('portionWeight').dataset.unit=$('foodUnit').value;updatePortionUI();});
$('householdSize').addEventListener('input',updatePortionUI);
$('householdSizeUnit').addEventListener('change',updatePortionUI);
['foodQty','foodName','foodCalories','foodProtein','foodCarbs','foodFat','foodFibre'].forEach(id=>$(id).addEventListener('input',updatePortionUI));
$('foodForm').addEventListener('submit',event=>{
  event.preventDefault();
  const editId=$('foodEditId').value,meal=$('foodMeal').value,source=getFormFood();
  const amount=n($('foodQty').value);
  if(!mealNames.includes(meal)||amount<=0||amount>100000){toast('Enter a valid meal and quantity');return;}
  if(!source?.name){toast('Select or create a food first');return;}
  if(customMode){
    if(metrics.some(k=>$(`food${k[0].toUpperCase()+k.slice(1)}`).value===''||!Number.isFinite(n(source[k]))||n(source[k])<0)){toast('Enter all five per-portion nutrition values');return;}
    if(n(source.calories)===0&&metrics.slice(1).some(k=>n(source[k])>0)){toast('Check calories for this food');return;}
  }
  const portion=calculatedPortions(source);
  if(!portion||!Number.isFinite(portion.ratio)||portion.ratio<=0){toast('Enter a valid measured amount or reference for this unit');return;}
  const entry={id:editId||uid(),meal,qty:portion.ratio,name:source.name,...Object.fromEntries(metrics.map(k=>[k,n(source[k])])),
    amount:portion.amount,unit:portion.unit,portionWeight:portion.portionWeight||undefined,portionUnit:portion.portionUnit||undefined,
    measureReference:['cup','glass','piece'].includes(portion.unit)?{unit:portion.unit,amount:portion.referenceAmount}:source.measureReference,
    householdSize:['cup','glass'].includes(portion.unit)?n($('householdSize').value)||undefined:source.householdSize,
    householdSizeUnit:['cup','glass'].includes(portion.unit)&&n($('householdSize').value)>0?$('householdSizeUnit').value:source.householdSizeUnit};
  const list=dayData().entries;
  if(editId){const i=list.findIndex(e=>e.id===editId);if(i<0){toast('Original food entry was not found');return;}list[i]=entry;}
  else list.push(entry);
  if(!editId&&customMode&&$('saveCustomFood').checked){
    const key=source.name.toLowerCase(),found=state.customFoods.findIndex(f=>f.name.toLowerCase()===key);
    const custom={name:source.name,...Object.fromEntries(metrics.map(k=>[k,n(source[k])])),portionWeight:entry.portionWeight,portionUnit:entry.portionUnit,
      measureReference:entry.measureReference,householdSize:entry.householdSize,householdSizeUnit:entry.householdSizeUnit};
    if(found>=0)state.customFoods[found]=custom;else state.customFoods.unshift(custom);
  }
  if($('saveFavorite').checked)saveFavoriteFood(source,entry);
  markEdited();saveState();$('foodDialog').close();render();expandedMeal=meal;renderMeals(dayData().entries);toast(editId?'Food updated':'Food added');
});
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>$(b.dataset.close).close()));

// Saved Foods store individual foods. Legacy saved-meal combinations are preserved and usable.
$('savedMealsBtn').addEventListener('click',openSavedFoods);
function openSavedFoods(){renderSavedFoods();$('savedMealsDialog').showModal();}
function renderSavedFoods(){
  const body=$('savedMealsContent'),favorites=state.savedFoods||[];
  body.innerHTML=`<div class="saved-fav-list">${favorites.length?favorites.map(f=>`<div class="saved-item"><div class="saved-item-line"><div><strong>${escapeHTML(f.name)}</strong><p>${escapeHTML(entryAmountLabel(f))} · ${fmt(n(f.calories)*n(f.qty||1))} kcal saved</p></div><button type="button" class="primary-btn" data-use-fav="${escapeHTML(f.id)}">＋ Add</button></div><button type="button" class="danger-link" data-remove-fav="${escapeHTML(f.id)}">Remove favorite</button></div>`).join(''):'<p class="empty-message">No saved foods yet. Log a food and tap ☆ Save, or tick “Save to Saved Foods” while logging.</p>'}</div>
  ${state.savedMeals.length?`<details class="legacy-meals"><summary>Older saved meal combinations (${state.savedMeals.length})</summary><div id="legacyMeals"></div></details>`:''}`;
  body.querySelectorAll('[data-use-fav]').forEach(btn=>btn.addEventListener('click',()=>{
    const fav=state.savedFoods.find(x=>x.id===btn.dataset.useFav);if(!fav)return;
    $('savedMealsDialog').close();openFoodDialog('Breakfast','',fav);toast('Choose the meal and confirm the amount');
  }));
  body.querySelectorAll('[data-remove-fav]').forEach(btn=>btn.addEventListener('click',()=>{
    const fav=state.savedFoods.find(x=>x.id===btn.dataset.removeFav);if(!fav)return;
    if(!confirm(`Remove “${fav.name}” from Saved Foods? Logged foods will remain.`))return;
    state.savedFoods=state.savedFoods.filter(x=>x.id!==fav.id);saveState();renderSavedFoods();
  }));
  if(state.savedMeals.length){
    const container=$('legacyMeals');
    container.innerHTML=state.savedMeals.map(m=>`<div class="saved-item"><strong>${escapeHTML(m.name)}</strong><p>${(m.entries||[]).length} items · old saved combination</p><div class="saved-actions"><select data-old-dest="${escapeHTML(m.id)}" aria-label="Destination meal">${mealNames.map(category=>`<option ${m.category===category?'selected':''}>${category}</option>`).join('')}</select><button type="button" data-old-add="${escapeHTML(m.id)}">Use combination</button><button type="button" class="danger" data-old-delete="${escapeHTML(m.id)}">Delete legacy</button></div></div>`).join('');
    container.querySelectorAll('[data-old-add]').forEach(b=>b.addEventListener('click',()=>{
      const old=state.savedMeals.find(m=>m.id===b.dataset.oldAdd);if(!old||!Array.isArray(old.entries))return;
      const choice=container.querySelectorAll('[data-old-dest]');const dest=[...choice].find(x=>x.dataset.oldDest===old.id)?.value||old.category;
      dayData().entries.push(...old.entries.map(e=>({...e,id:uid(),meal:dest})));markEdited();saveState();$('savedMealsDialog').close();render();toast('Old saved combination reused');
    }));
    container.querySelectorAll('[data-old-delete]').forEach(b=>b.addEventListener('click',()=>{
      if(!confirm('Delete this older saved meal combination? Diary entries remain.'))return;
      state.savedMeals=state.savedMeals.filter(x=>x.id!==b.dataset.oldDelete);saveState();renderSavedFoods();
    }));
  }
}
$('copyYesterdayBtn').addEventListener('click',()=>{
  const source=readDay(shiftISO(selectedDate,-1)).entries;
  if(!source.length){toast('No foods logged on the previous day');return;}
  const target=dayData();
  if(target.entries.length&&!confirm('Replace this date’s foods with yesterday’s foods?'))return;
  target.entries=source.map(e=>({...e,id:uid()}));target.complete=false;saveState();render();toast('Yesterday’s foods copied');
});

// Daily & weekly insights. Only explicitly completed days count towards averages.
$('dailyTab').addEventListener('click',()=>{currentInsight='daily';updateInsightsTabs();renderInsights();});
$('insightPrev').addEventListener('click',()=>{insightDate=shiftISO(insightDate,currentInsight==='weekly'?-7:-1);renderInsights();});
$('insightNext').addEventListener('click',()=>{insightDate=shiftISO(insightDate,currentInsight==='weekly'?7:1);renderInsights();});
$('weeklyTab').addEventListener('click',()=>{currentInsight='weekly';updateInsightsTabs();renderInsights();});
function updateInsightsTabs(){
  $('dailyTab').classList.toggle('active',currentInsight==='daily');
  $('weeklyTab').classList.toggle('active',currentInsight==='weekly');
}
function gapDetails(total){
  return ['protein','carbs','fat','fibre'].map(k=>({key:k,got:total[k],target:n(state.targets[k]),gap:Math.max(0,n(state.targets[k])-total[k])})).filter(x=>x.target>0);
}
function metricLabel(k){return {protein:'Protein',carbs:'Carbs',fat:'Fat',fibre:'Fibre'}[k]||k;}
const suggestionsByGap={
  protein:['Paneer (100 g)','Boiled egg (1)','Skyr plain (100 g)','Roasted chana (30 g)','Tofu (100 g)','Chicken breast cooked (100 g)','Greek yogurt plain (100 g)'],
  fibre:['Guava (1 medium)','Chickpeas boiled (100 g)','Roasted chana (30 g)','Apple (1 medium)','Sprouts salad (1 cup)','Oats cooked in water (1 cup)'],
  carbs:['Banana (1 medium)','Roti / chapati (1 medium)','Cooked rice (1 cup)','Oats cooked in water (1 cup)','Sweet potato boiled (100 g)'],
  fat:['Almonds (10)','Peanuts (30 g)','Walnuts (15 g)','Avocado (100 g)','Chia seeds (1 tbsp)']
};
function foodIdeas(gaps){
  const p=state.profile||{};const diet=p.diet||'all';
  const excludeNonVeg=(name)=>/chicken|fish|prawn|mutton|egg/i.test(name);
  const excludeEggs=(name)=>/egg/i.test(name);
  const excludeDairy=(name)=>/paneer|milk|curd|yogurt|skyr|cheese|butter|ghee/i.test(name);
  const sorted=gaps.filter(g=>g.gap>0).sort((a,b)=>(b.gap/b.target)-(a.gap/a.target));
  const out=[],seen=new Set();
  for(const gap of sorted){
    for(const name of suggestionsByGap[gap.key]||[]){
      if(seen.has(name))continue;
      if((diet==='veg'||diet==='vegan')&&excludeNonVeg(name))continue;
      if(diet==='eggs'&&/chicken|fish|prawn|mutton/i.test(name))continue;
      if(diet==='vegan'&&excludeDairy(name))continue;
      const food=dataFoods.find(f=>f.name===name);if(!food)continue;
      out.push({food,focus:gap.key});seen.add(name);break;
    }
    if(out.length>=3)break;
  }
  return out;
}
function gapHTML(gaps){
  if(!gaps.length)return '<p>Set daily targets in Profile to see the amounts remaining.</p>';
  return `<div class="gaps-list">${gaps.map(x=>`<div class="gap-row"><span>${metricLabel(x.key)}</span><div class="track"><span style="width:${pct(x.got,x.target)}%"></span></div><strong>${fmt(x.gap)} g left</strong></div>`).join('')}</div>`;
}
function renderInsights(){
  const first=currentInsight==='weekly'?shiftISO(insightDate,-6):insightDate;
  $('insightPeriod').textContent=currentInsight==='weekly'?`${shortDate(first)} – ${datePretty(insightDate)}`:datePretty(insightDate);
  $('insightPeriodHint').textContent=currentInsight==='weekly'?'7-day period ending on this date':'One day at a time';
  if(currentInsight==='weekly')return renderWeekly();
  const d=readDay(insightDate),total=sum(d.entries),gaps=gapDetails(total),body=$('insightsBody');
  if(!d.entries.length){body.innerHTML='<div class="placeholder-card"><h2>Log a meal to get started</h2><p>Choose a date in Diary, log your food and mark the day complete to see its analysis.</p></div>';return;}
  if(!d.complete){
    body.innerHTML=`<article class="insight-card"><span class="insight-badge warn">Day still in progress</span><h2>${escapeHTML(datePretty(insightDate))}</h2><p>You’ve logged ${d.entries.length} foods (${Math.round(total.calories)} kcal). When you're finished, tap <strong>Finish day</strong> in the Diary to unlock your daily summary and food ideas.</p><button type="button" class="outline-btn" id="returnDiary">Back to diary</button></article>`;
    $('returnDiary').addEventListener('click',()=>navigate('diary'));return;
  }
  const t=state.targets;
  let nutritionNotes=[];
  if(n(t.protein)>0){const diff=t.protein-total.protein;if(diff>0)nutritionNotes.push(`${fmt(diff)} g below your protein target`);else nutritionNotes.push('Your logged protein met your target');}
  if(n(t.fibre)>0){const diff=t.fibre-total.fibre;if(diff>0)nutritionNotes.push(`${fmt(diff)} g below your fibre target`);else nutritionNotes.push('Your logged fibre met your target');}
  const ideas=foodIdeas(gaps);
  const ideasHTML=ideas.length?ideas.map(({food,focus})=>`<div class="food-idea"><div><strong>${escapeHTML(food.name)}</strong><small>Approx. ${fmt(food.calories)} kcal · ${fmt(food[focus])} g ${metricLabel(focus).toLowerCase()} per catalogue serving</small></div><span class="value">${escapeHTML(metricLabel(focus))}</span></div>`).join(''):'<p>Your logged nutrition meets the configured macro targets, or there are no matching suggestions.</p>';
  body.innerHTML=`<article class="insight-card"><span class="insight-badge">✓ Logged day complete</span><h2>${escapeHTML(datePretty(insightDate))}</h2><div class="kpi-row"><div class="kpi"><strong>${Math.round(total.calories)}</strong><span>kcal logged</span></div><div class="kpi"><strong>${n(t.calories)?`${Math.round(total.calories-t.calories)>0?'+':''}${Math.round(total.calories-t.calories)}`:'—'}</strong><span>kcal vs daily target</span></div></div><p style="margin-top:14px">${escapeHTML(nutritionNotes.join(' · ')||'Set macro targets in Profile to get more useful insights.')}</p></article><article class="insight-card"><h2>What’s left against your targets?</h2><p>Gaps are estimates based on logged portions—not diagnosed nutrient deficiencies. There is no need to force every target every day.</p>${gapHTML(gaps)}</article><article class="insight-card"><h2>Food ideas for your gaps</h2><p>Examples from the Indian food catalogue, adjusted for your food preference. Suggestions are optional and may also contribute other macros.</p>${ideasHTML}</article>`;
}
function renderWeekly(){
  const days=Array.from({length:7},(_,i)=>shiftISO(insightDate,i-6));
  const completed=days.filter(date=>readDay(date).complete&&readDay(date).entries.length);
  const totals=completed.map(date=>sum(readDay(date).entries));
  const dailyAvg=totals.length?Object.fromEntries(metrics.map(k=>[k,totals.reduce((s,t)=>s+t[k],0)/totals.length])):emptyTotals();
  const maxCal=Math.max(n(state.targets.calories),...days.map(d=>sum(readDay(d).entries).calories),1);
  const bars=days.map(date=>{
    const d=readDay(date);const cal=sum(d.entries).calories;
    const height=Math.max(4,Math.round(cal/maxCal*112));
    return `<div class="bar-col ${d.complete?'is-complete':''}" title="${escapeHTML(datePretty(date))}: ${Math.round(cal)} kcal${d.complete?' (complete)':' (in progress)'}"><span class="bar-value">${cal?Math.round(cal):'—'}</span><div class="bar-body" style="height:${height}px"></div><small>${weekday(date)}</small></div>`;
  }).join('');
  const trendHTML=weightTrendHTML();
  $('insightsBody').innerHTML=`<article class="insight-card"><span class="insight-badge">${completed.length}/7 completed days</span><h2>${escapeHTML(shortDate(days[0]))} – ${escapeHTML(datePretty(days[6]))}</h2><div class="weekly-bars">${bars}</div><p>Filled bars: completed days · Pale bars: still in progress. Unfinished days are excluded from averages.</p><div class="kpi-row"><div class="kpi"><strong>${completed.length?Math.round(dailyAvg.calories):'—'}</strong><span>avg. kcal / completed day</span></div><div class="kpi"><strong>${completed.length?fmt(dailyAvg.protein):'—'}</strong><span>avg. protein g / completed day</span></div></div></article><article class="insight-card"><h2>Average macro gaps</h2>${completed.length?gapHTML(gapDetails(dailyAvg)):'<p>No completed days yet. Mark your diary days complete first.</p>'}</article><article class="insight-card"><h2>Measured weight trend</h2>${trendHTML}</article>`;
}

// Profile is read-only until the user explicitly chooses Edit.
function fieldValue(key){
  const p=state.profile||{};
  return p[key]??(key==='goal'?'maintain':key==='diet'?'all':key==='lifeStage'?'general':key==='activity'?'sedentary':'');
}
function fillProfileFields(){
  for(const key of ['name','age','height','weight','activity','goal','diet','lifeStage']){
    const el=$(`profile${key[0].toUpperCase()+key.slice(1)}`);if(el)el.value=fieldValue(key);
  }
  metrics.forEach(k=>{$(`target${k[0].toUpperCase()+k.slice(1)}`).value=state.targets[k]??'';});
}
function setProfileEditor(which,on){
  const about=which==='About';
  if(about)editingAbout=on;else editingTargets=on;
  $(`${about?'about':'target'}Fields`).hidden=!on;
  $(`${about?'about':'targets'}Summary`).hidden=on;
  $(`edit${about?'About':'Targets'}Btn`).hidden=on;
  if(on)fillProfileFields();
}
function summaryLine(label,value){return `<div><span>${escapeHTML(label)}</span><strong>${escapeHTML(String(value))}</strong></div>`;}
function renderProfile(){
  const p=state.profile||{};
  const display={sedentary:'Mostly seated',light:'Lightly active',moderate:'Moderately active',active:'Very active'};
  const goals={maintain:'Maintain weight',gain:'Gain weight',lose:'Lose weight',fuel:'Nutrition tracking only'};
  const diets={all:'All foods',veg:'Vegetarian',eggs:'Vegetarian + eggs',vegan:'Vegan'};
  const stages={general:'General adult',pregnant:'Pregnant',breastfeeding:'Breastfeeding',other:'Other / prefer not to say'};
  $('aboutSummary').innerHTML=summaryLine('Name',p.name||'Not set')+summaryLine('Age',p.age?`${p.age} years`:'Not set')+summaryLine('Height',p.height?`${p.height} cm`:'Not set')+summaryLine('Current weight',p.weight?`${p.weight} kg`:'Not set')+summaryLine('Activity',display[p.activity]||'Mostly seated')+summaryLine('Goal',goals[p.goal]||'Maintain weight')+summaryLine('Food preference',diets[p.diet]||'All foods')+summaryLine('Life stage',stages[p.lifeStage]||'General adult');
  $('targetsSummary').innerHTML=metrics.map(k=>summaryLine(k==='fibre'?'Fibre':k[0].toUpperCase()+k.slice(1),`${fmt(state.targets[k])} ${k==='calories'?'kcal':'g'}`)).join('');
  fillProfileFields();
  setProfileEditor('About',false);setProfileEditor('Targets',false);
  $('weightDate').value=todayISO();$('weightValue').value=state.weights[todayISO()]||'';
  renderWeightHistory();
}
$('editAboutBtn').addEventListener('click',()=>setProfileEditor('About',true));
$('cancelAboutBtn').addEventListener('click',()=>setProfileEditor('About',false));
$('editTargetsBtn').addEventListener('click',()=>setProfileEditor('Targets',true));
$('cancelTargetsBtn').addEventListener('click',()=>setProfileEditor('Targets',false));
$('saveAboutBtn').addEventListener('click',()=>{
  const p={...state.profile};
  for(const key of ['name','age','height','weight','activity','goal','diet','lifeStage']){
    const el=$(`profile${key[0].toUpperCase()+key.slice(1)}`);
    if(['age','height','weight'].includes(key)){
      const v=el.value.trim();if(v&&(!el.checkValidity()||!Number.isFinite(Number(v)))){toast(`Check ${key}`);el.focus();return;}
      p[key]=v===''?'':n(v);
    }else p[key]=el.value.trim();
  }
  state.profile=p;saveState();render();renderProfile();toast('Profile saved');
});
$('saveTargetsBtn').addEventListener('click',()=>{
  for(const k of metrics){const el=$(`target${k[0].toUpperCase()+k.slice(1)}`);if(!el.checkValidity()||!Number.isFinite(Number(el.value))){toast('Check target amounts');el.focus();return;}}
  metrics.forEach(k=>{const el=$(`target${k[0].toUpperCase()+k.slice(1)}`);state.targets[k]=el.value===''?0:n(el.value);});
  saveState();render();renderProfile();toast('Targets saved');
});
function validWeights(){
  return Object.entries(state.weights).filter(([date,v])=>/^\d{4}-\d{2}-\d{2}$/.test(date)&&n(v)>=20&&n(v)<=400).sort(([a],[b])=>a.localeCompare(b));
}
function weightTrendHTML(){
  const weights=validWeights();
  if(!weights.length)return '<p>No check-ins yet. Add a dated weight in Profile to see the measured trend.</p>';
  if(weights.length===1)return `<p>One check-in: <strong>${fmt(weights[0][1])} kg</strong> on ${escapeHTML(datePretty(weights[0][0]))}. Add another date to show change.</p>`;
  const min=Math.min(...weights.map(x=>n(x[1]))),max=Math.max(...weights.map(x=>n(x[1]))),padding=Math.max(0.7,(max-min)*0.25);
  const lower=min-padding,upper=max+padding,first=Date.parse(weights[0][0]+'T12:00:00Z'),last=Date.parse(weights[weights.length-1][0]+'T12:00:00Z');
  const points=weights.map(([date,value])=>({date,value:n(value),x:30+300*(Date.parse(date+'T12:00:00Z')-first)/Math.max(1,last-first),y:123-93*(n(value)-lower)/(upper-lower)}));
  const line=points.map(p=>`${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const delta=n(weights[weights.length-1][1])-n(weights[0][1]);
  const svg=`<svg class="weight-svg" viewBox="0 0 360 162" role="img" aria-label="Measured weight change from ${escapeHTML(datePretty(weights[0][0]))} to ${escapeHTML(datePretty(weights[weights.length-1][0]))}"><line x1="30" y1="123" x2="330" y2="123" stroke="#dce7df"/><polyline points="${line}" fill="none" stroke="#248764" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${points.map(pt=>`<circle cx="${pt.x}" cy="${pt.y.toFixed(1)}" r="4.5" fill="#248764" stroke="#fff" stroke-width="2"/>`).join('')}<text x="30" y="145" text-anchor="start" class="axis-label">${escapeHTML(shortDate(weights[0][0]))}</text><text x="330" y="145" text-anchor="end" class="axis-label">${escapeHTML(shortDate(weights[weights.length-1][0]))}</text></svg>`;
  return `<div class="weight-summary"><strong>${delta>0?'+':''}${fmt(delta)} kg</strong><span> measured change · ${weights.length} check-ins</span></div>${svg}<p class="field-help">${fmt(weights[0][1])} → ${fmt(weights[weights.length-1][1])} kg. This includes check-ins outside the selected analysis week. Short-term changes can reflect water, timing and other factors.</p>`;
}
function renderWeightHistory(){
  const arr=validWeights().slice().reverse().slice(0,10);
  $('weightHistory').innerHTML=arr.length?arr.map(([date,value])=>`<div class="weight-row"><span>${escapeHTML(datePretty(date))}</span><span><strong>${fmt(value)} kg</strong> <button type="button" data-delete-weight="${date}" aria-label="Delete weight for ${date}">×</button></span></div>`).join(''):'<p class="empty-message">No check-ins yet.</p>';
  $('profileWeightChart').innerHTML=weightTrendHTML();
  $('weightHistory').querySelectorAll('[data-delete-weight]').forEach(b=>b.addEventListener('click',()=>{
    if(!confirm('Delete this weight check-in?'))return;
    delete state.weights[b.dataset.deleteWeight];saveState();renderWeightHistory();
  }));
}
$('saveWeightBtn').addEventListener('click',()=>{
  const date=$('weightDate').value,value=n($('weightValue').value);
  if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(value)||value<20||value>400){toast('Enter a valid date and measured weight');return;}
  state.weights[date]=value;
  // Only update the profile 'current weight' if it is the latest dated check-in.
  const newest=validWeights().at(-1);if(newest&&newest[0]===date)state.profile.weight=value;
  saveState();renderProfile();$('weightDate').value=date;$('weightValue').value=value;toast('Weight check-in saved');
});
$('backupBtn').addEventListener('click',()=>{
  try{
    const payload={app:'Indian Food Diary',exportedAt:new Date().toISOString(),version:2,diary:state};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`indian-food-diary-backup-${todayISO()}.json`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
    toast('Backup downloaded — keep it safe');
  }catch(e){toast('Unable to create backup');}
});
$('restoreInput').addEventListener('change',async event=>{
  const file=event.target.files?.[0];if(!file)return;
  try{
    if(file.size>12*1024*1024)throw Error('Backup file is too large');
    const payload=JSON.parse(await file.text());const next=payload.diary;
    if(!payload||payload.app!=='Indian Food Diary'||!next||!next.days||typeof next.days!=='object'||Array.isArray(next.days)||!Array.isArray(next.savedMeals)||!next.targets)throw Error('Not an Indian Food Diary backup');
    if(Object.keys(next.days).length>20000)throw Error('Too many dates');
    for(const [date,day] of Object.entries(next.days)){
      if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!day||!Array.isArray(day.entries)||day.entries.length>5000)throw Error('Invalid diary entries');
      for(const entry of day.entries){if(!entry||typeof entry.name!=='string'||entry.name.length>250||!mealNames.includes(entry.meal)||metrics.some(k=>!Number.isFinite(Number(entry[k]))||Number(entry[k])<0)||!Number.isFinite(Number(entry.qty))||Number(entry.qty)<=0)throw Error('Invalid food entry');}
    }
    if(!confirm('Restore this backup? It will replace the diary data currently stored in this browser. Export your current backup first if you need it.'))return;
    localStorage.setItem(storageKey,JSON.stringify(next));state=loadState();selectedDate=todayISO();navigate('diary');render();toast('Backup restored');
  }catch(err){toast(`Restore failed: ${err.message}`);}finally{event.target.value='';}
});

// First render; no personal information is uploaded anywhere.
$('diaryDate').value=selectedDate;
render();
