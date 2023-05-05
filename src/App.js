import "./App.css";
import Card from "./components/UI/Card";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 5, 5),
    },
    {
      title: "Bike Insurance",
      amount: 294.67,
      date: new Date(2023, 5, 5),
    },
    {
      title: "Motor Insurance",
      amount: 294.67,
      date: new Date(2023, 5, 5),
    },
    {
      title: "Vehicle Insurance",
      amount: 294.67,
      date: new Date(2023, 5, 5),
    },
  ];
  return (
    <div className="App">
      <h1>Let's start here</h1>
      <Card className="expenses">
        {expenses.map((item, index) => {
          return (
            <ExpenseItem
              key={index}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default App;
