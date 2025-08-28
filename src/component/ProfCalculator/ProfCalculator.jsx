import { useState } from "react";
import styles from "./ProfCalculator.module.scss";
import { calculateSolarProfit } from "../../utils/solarCalc";

import Result from "../Results/Results.jsx";

export default function ProfCalculator() {
  const [formData, setFormData] = useState({
    addressLabel: "",
    roofArea: "",
    numApartments: "",
    annualDemand: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [results, setResults] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const output = calculateSolarProfit(formData);
    setResults(output);
  };
  return (
    <div className={styles.profCalculatorPage}>
      <h2>Mieterstrom Profitability Calculator</h2>
      <p>
        Konfigurieren Sie einfach Ihr nachhaltiges Gebäude und genießen Sie die
        Vorteile, die Sie Ihren Mietern mit der sauberen Energie der Zukunft
        bieten.
      </p>

      <form onSubmit={handleSubmit} className={styles.calcForm}>
        <h3>Eingaben</h3>
        <div className={styles.formGroup}>
          <label htmlFor="addressLabel">Adresse / Bezeichnung</label>
          <input
            type="text"
            id="addressLabel"
            name="addressLabel"
            value={formData.addressLabel}
            onChange={handleInputChange}
            placeholder="Adresse oder Label (keine Geokodierung)"
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Dachfläche (m²)</label>
          <input
            type="number"
            name="roofArea"
            value={formData.roofArea}
            onChange={handleInputChange}
            className={styles.formInput}
            placeholder="m²"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Anzahl Wohnungen</label>
          <input
            type="number"
            name="numApartments"
            value={formData.numApartments}
            onChange={handleInputChange}
            className={styles.formInput}
            placeholder="Anzahl"
            inputMode="numeric"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            Jährlicher Strombedarf (kWh/Jahr)
          </label>
          <input
            type="number"
            name="annualDemand"
            value={formData.annualDemand}
            onChange={handleInputChange}
            className={styles.formInput}
            placeholder="kWh/Jahr"
            inputMode="numeric"
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Berechnen
        </button>
      </form>
      <Result results={results} />
    </div>
  );
}
