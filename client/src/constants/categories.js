const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];
const progressColors = ['#CEE5D0', '#FED2AA', '#94B3FD', '#94DAFF', '#89B5AF', '#FFE699', '#FF9292', '#FFCCD2', '#D1E8E4', '#C37B89', '#BCCC9A'];

export const incomeCategories = [
  { type: 'Business', amount: 0, color: incomeColors[0] },
  { type: 'Investments', amount: 0, color: incomeColors[1] },
  { type: 'Extra income', amount: 0, color: incomeColors[2] },
  { type: 'Deposits', amount: 0, color: incomeColors[3] },
  { type: 'Lottery', amount: 0, color: incomeColors[4] },
  { type: 'Gifts', amount: 0, color: incomeColors[5] },
  { type: 'Salary', amount: 0, color: incomeColors[6] },
  { type: 'Savings', amount: 0, color: incomeColors[7] },
  { type: 'Rental income', amount: 0, color: incomeColors[8] },
];

export let expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColors[0], budget: 100, id: 0, progressColor: progressColors[0] },
  { type: 'Car', amount: 0, color: expenseColors[1], budget: 100, id: 1, progressColor: progressColors[1] },
  { type: 'Clothes', amount: 0, color: expenseColors[2], budget: 100, id: 2, progressColor: progressColors[2] },
  { type: 'Travel', amount: 0, color: expenseColors[3], budget: 100, id: 3, progressColor: progressColors[3] },
  { type: 'Food', amount: 0, color: expenseColors[4], budget: 100, id: 4, progressColor: progressColors[4] },
  { type: 'Shopping', amount: 0, color: expenseColors[5], budget: 100, id: 5, progressColor: progressColors[5] },
  { type: 'House', amount: 0, color: expenseColors[6], budget: 100, id: 6, progressColor: progressColors[6] },
  { type: 'Entertainment', amount: 0, color: expenseColors[7], budget: 100, id: 7, progressColor: progressColors[7] },
  { type: 'Phone', amount: 0, color: expenseColors[8], budget: 100, id: 8, progressColor: progressColors[8] },
  { type: 'Pets', amount: 0, color: expenseColors[9], budget: 100, id: 9, progressColor: progressColors[9] },
  { type: 'Other', amount: 0, color: expenseColors[10], budget: 100, id: 10, progressColor: progressColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};