import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    occupation: "", // Tələbə və ya Professional
    institution: "", // Universitet və ya Şirkət adı
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <h1>Multi-Step-Form</h1>

      {step === 1 && (
        <div className="step-container">
          <h3>1. Şəxsi Məlumatlar</h3>
          
          <div className="input-group">
            <label>AD SOYAD:</label>
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              placeholder="Adınızı və soyadınızı daxil edin"
            /> {/* Burada düzəliş edildi */}
          </div>

          <div className="input-group">
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="nümunə@mail.com"
            />
          </div>

          {/* Status seçimi əlavə edirik (Step 2-nin məntiqi üçün vacibdir) */}
          <div className="input-group">
            <label>Status:</label>
            <select name="occupation" value={formData.occupation} onChange={handleChange}>
              <option value="">Seçin...</option>
              <option value="student">Tələbə</option>
              <option value="professional">Professional</option>
            </select>
          </div>
        </div>
      )}
      {step === 2 && (
  <div className="step-container">
    <h3>2. Əlavə Məlumatlar</h3>
    
    {formData.occupation === "student" && (
      <div className="input-group">
        <label>Universitet:</label>
        <input 
          type="text" 
          name="institution" 
          value={formData.institution} 
          onChange={handleChange} 
          placeholder="Universitetinizin adını daxil edin"
        />
      </div>
    )}

    {formData.occupation === "professional" && (
      <div className="input-group">
        <label>Şirkət Adı:</label>
        <input 
          type="text" 
          name="institution" 
          value={formData.institution} 
          onChange={handleChange} 
          placeholder="İşlədiyiniz şirkətin adını daxil edin"
        />
      </div>
    )}

    {!formData.occupation && (
      <p style={{ color: "red" }}>Zəhmət olmasa, birinci addımda statusunuzu seçin.</p>
    )}
  </div>
)}
{step === 3 && (
  <div className="step-container">
    <h3>3. Məlumatlarınızı Yoxlayın</h3>
    <div className="preview-data" style={{ textAlign: 'left', backgroundColor: '#f0f0f0', padding: '15px' }}>
      <p><strong>Ad Soyad:</strong> {formData.fullName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Status:</strong> {formData.occupation === "student" ? "Tələbə" : "Professional"}</p>
      <p><strong>{formData.occupation === "student" ? "Universitet:" : "Şirkət:"}</strong> {formData.institution}</p>
    </div>
    <button onClick={() => alert("Form uğurla göndərildi!")} style={{ marginTop: '10px', backgroundColor: 'green', color: 'white' }}>
      Təsdiqlə və Göndər
    </button>
  </div>
)}

      {/* Naviqasiya Düymələri */}
      <div className="button-group">
        {step > 1 && <button onClick={prevStep}>Geri</button>}
        {step < 3 && <button onClick={nextStep}>İrəli</button>}
      </div>
    </div>
    
  );
}

export default App;