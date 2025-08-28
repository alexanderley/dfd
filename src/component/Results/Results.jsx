export default function Result({ results }) {
  if (!results) return null;

  return (
    <div className="results">
      <h3>Ergebnisse</h3>
      <p>
        <strong>Investitionskosten:</strong>{" "}
        {Math.round(results.totalInvestment).toLocaleString()} €
      </p>
      <p>
        <strong>Jahresproduktion:</strong>{" "}
        {Math.round(results.annualProduction).toLocaleString()} kWh
      </p>
      <p>
        <strong>O&M Kosten:</strong> {results.annualOM.toFixed(2)} €
      </p>
      <p>
        <strong>Jährlicher Gewinn:</strong> {results.annualProfit.toFixed(2)} €
      </p>
      <p>
        <strong>ROI:</strong>{" "}
        {results.roi ? results.roi.toFixed(1) + " %" : "-"}
      </p>
    </div>
  );
}
