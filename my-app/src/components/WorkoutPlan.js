import React, { useState } from 'react';

const WorkoutPlan = () => {
  const [initial1RM, setInitial1RM] = useState(0);
  const [generatedPlan, setGeneratedPlan] = useState([]);

  const roundToNearest = (num, nearest) => {
    return Math.round(num / nearest) * nearest;
  };

  const calculatePlan = (oneRepMax) => {
    const plan = [];
    let weight = oneRepMax * 0.8; // Start at 80% of the input 1RM

    for (let week = 1; week <= 6; week++) {
      plan.push({
        week: week,
        day1: roundToNearest(weight, 2.5),
        day2: roundToNearest(weight, 2.5),
        day3: roundToNearest(weight, 2.5),
      });
      weight *= 1.05; // Increase weight by 5% each week
    }
    setGeneratedPlan(plan);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePlan(initial1RM);
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Workout Plan Generator</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>
          Current 1RM:
          <input
            type="number"
            value={initial1RM}
            onChange={(e) => setInitial1RM(parseFloat(e.target.value))}
            step="2.5"
            min="0"
            style={{ marginLeft: '10px' }}
          />
        </label>
        <button type="submit">Generate Plan</button>
      </form>

      {generatedPlan.length > 0 && (
        <div>
          <h2>Your Workout Plan</h2>
          {generatedPlan.map((weekPlan) => (
            <div key={weekPlan.week}>
              <h3>Week {weekPlan.week}</h3>
              <ul>
                <li>Day 1: {weekPlan.day1} kg - 6 x 2 reps</li>
                <li>Day 2: {weekPlan.day2} kg - 6 x 3 reps</li>
                <li>Day 3: {weekPlan.day3} kg - 6 x 2 reps</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutPlan;