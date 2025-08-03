import React from "react";

export const StatsBar = ({ score, totalQuestions, attempts = [], maxScore = 0 }) => {
  const correct = score;
  const incorrect = totalQuestions - score;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const correctStroke = (correct / totalQuestions) * circumference;
  const incorrectStroke = circumference - correctStroke;

  return (
    <div className="flex flex-wrap gap-6 p-6 bg-gray-50 justify-center">
      <div className="flex-1 min-w-[160px] bg-white rounded shadow p-4 text-center">
        <div className="text-xs text-gray-500 mb-1">Attempts</div>
        <div className="font-bold text-lg">{attempts.length}</div>
      </div>
      <div className="flex-1 min-w-[160px] bg-white rounded shadow p-4 text-center">
        <div className="text-xs text-gray-500 mb-1">Highest Score</div>
        <div className="font-bold text-lg">
          {maxScore} / {totalQuestions}
        </div>
      </div>
      <div className="flex-1 min-w-[160px] bg-white rounded shadow p-4 text-center">
        <div className="text-xs text-gray-500 mb-1">Last Score</div>
        <div className="font-bold text-lg">
          {score} / {totalQuestions}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-w-[180px]">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#facc15"
            strokeWidth="16"
            strokeDasharray={circumference}
            strokeDashoffset="0"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#4ade80"
            strokeWidth="16"
            strokeDasharray={`${correctStroke} ${incorrectStroke}`}
            strokeDashoffset="0"
            transform="rotate(-90 60 60)"
          />
          <text
            x="60"
            y="65"
            textAnchor="middle"
            fontSize="22"
            fontWeight="bold"
            fill="#222"
            dominantBaseline="middle"
          >
            {score}
          </text>
          <text
            x="60"
            y="85"
            textAnchor="middle"
            fontSize="12"
            fill="#666"
            dominantBaseline="middle"
          >
            / {totalQuestions}
          </text>
        </svg>
        <div className="flex gap-4 mt-2 text-xs">
          <span className="flex items-center">
            <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-1"></span>
            Correct: {correct}
          </span>
          <span className="flex items-center">
            <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-1"></span>
            Incorrect: {incorrect}
          </span>
        </div>
      </div>
    </div>
  );
};

export const ReportScreen = ({
  score,
  totalQuestions,
  attempts = [],
  maxAttempts = 3,
  maxScore = 0,
  quizName = "Untitled Quiz",
  passPercentage = 80,
  onBack = () => {},
}) => {
  const correct = score;
  const incorrect = totalQuestions - score;
  const percent = totalQuestions
    ? Math.round((score / totalQuestions) * 100)
    : 0;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const correctStroke = (correct / totalQuestions) * circumference;
  const incorrectStroke = circumference - correctStroke;

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow overflow-hidden">
      <div className="bg-[#0e2237] p-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-white text-xl font-bold mb-1">
            {quizName} - Report
          </div>
          <div className="text-gray-300 text-sm">
            Attempt: <span className="font-semibold">{attempts.length}</span> / {maxAttempts}
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="text-xs text-gray-300 mb-1">Your Performance Status</div>
          <div className="flex items-center gap-2">
            <div className="w-48 h-3 bg-gray-700 rounded-full overflow-hidden relative">
              <div
                className="h-3 bg-green-500 rounded-full"
                style={{ width: `${percent}%` }}
              ></div>
              <div
                className="absolute left-0 top-0 h-3 border-l-2 border-yellow-400"
                style={{ left: `${passPercentage}%` }}
              ></div>
            </div>
            <span className="text-xs text-white ml-2">{percent}%</span>
            <span className="text-xs text-yellow-300 ml-2">
              Pass: {passPercentage}%
            </span>
          </div>
        </div>
      </div>

      <StatsBar
        score={score}
        totalQuestions={totalQuestions}
        attempts={attempts}
        maxScore={maxScore}
      />

      <div className="p-6">
        <div className="font-semibold mb-4">Answer Breakdown</div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col items-center">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="#facc15"
                strokeWidth="16"
                strokeDasharray={circumference}
                strokeDashoffset="0"
              />
              <circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="#4ade80"
                strokeWidth="16"
                strokeDasharray={`${correctStroke} ${incorrectStroke}`}
                strokeDashoffset="0"
                transform="rotate(-90 60 60)"
              />
              <text
                x="60"
                y="65"
                textAnchor="middle"
                fontSize="22"
                fontWeight="bold"
                fill="#222"
              >
                {totalQuestions}
              </text>
              <text
                x="60"
                y="80"
                textAnchor="middle"
                fontSize="12"
                fill="#666"
              >
                Total
              </text>
            </svg>
            <div className="flex gap-4 mt-2 text-xs">
              <span className="flex items-center">
                <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-1"></span>
                Correct: {correct}
              </span>
              <span className="flex items-center">
                <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-1"></span>
                Incorrect: {incorrect}
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="font-semibold mb-2">All Attempts:</div>
            <ul className="list-disc pl-6 text-gray-700">
              {attempts.map((a, i) => (
                <li key={i}>
                  Attempt {i + 1}: {a.score} / {totalQuestions}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {attempts.length > 0 && (
        <div className="p-6 pt-0 flex justify-end">
          <button
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded"
            onClick={onBack}
          >
            Back to Quiz
          </button>
        </div>
      )}
    </div>
  );
};