import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [Pracownicy] = useState({
    id:1, imie:Anna, nazwisko:Kowalska, dział:IT, pensja:7200,
    id:2, imie:Piotr, nazwisko:Nowak, dział:Spszedaż, pensja:5400,
    id:3, imie:Maria, nazwisko:Wiśniewska, dział:Księgowość, pensja:6100,
    id:4, imie:Jan, nazwisko:Kowalczyk, dział:IT, pensja:8300,
    id:5, imie:Katarzyna, nazwisko:Zielińska, dział:SPrzedaż, pensja:5900,
    id:6, imie:Tomasz, nazwisko:Szymański, dział:IT, pensja:9100,
    id:7, imie:Agnieszka, nazwisko:Woźniak, dział:Księgowość, pensja:6400,
    id:8, imie:Michał, nazwisko:Kaczmarek, dział:Spszedaż, pensja:5200,
    id:9, imie:Magdalena, nazwisko:Mazur, dział:IT, pensja:7800,
    id:10, imie:Paweł, nazwisko:Krawczyk, dział:Księgowość, pensja:6000,
    id:11, imie:Jonna, nazwisko:Piotrowska, dział:Sprzedż, pensja:5600,
    id:12, imie:Łukasz, nazwisko:Grabowski, dział:IT, pensja:8700,
  })
  const handleSzukajChange = (e) => {
    const wartosc = e.target.value;
    setSzukanaFraza(wartosc);
    fiskujIIWyswietlWKonsoli(wartosc, wybranyDzial);
  };
  const handleDzialChange = (e) => {
    const wartosc = e.target.value;
    setWybranyDzial(wartosc);
    fiskujIIWyswietlWKonsoli(szukanaFraza, wartosc);
  };

  return (
    <>
    <div className="container mt-4">
      <h2 className="mb-4">Pracownicy</h2>
      <div className="mb-3">
        <label htmlFor="szukaj" className="form-label">Szukaj:</label>
        <input 
          type="text" 
          className="form-control" 
          id="szukaj" 
          value={szukanaFraza}
          onChange={handleSzukajChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dzial" className="form-label">Dział:</label>
        <select 
          className="form-select" 
          id="dzial" 
          value={wybranyDzial}
          onChange={handleDzialChange}
        >
          <option value="">Wszystkie</option>
          <option value="IT">IT</option>
          <option value="Sprzedaż">Sprzedaż</option>
          <option value="Księgowość">Księgowość</option>
        </select>
      </div>

      <p className="fw-bold">Liczba pracowników: {przefiltrowaniPracownicy.length}</p>

      {przefiltrowaniPracownicy.length > 0 ? (
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">imię</th>
              <th scope="col">nazwisko</th>
              <th scope="col">dział</th>
              <th scope="col">pensja</th>
            </tr>
          </thead>
          <tbody>
            {przefiltrowaniPracownicy.map((Pracownik) => (
              <tr key={Pracownik.id}>
                <td>{Pracownik.imie}</td>
                <td>{Pracownik.nazwisko}</td>
                <td>{Pracownik.dzial}</td>
                <td>{Pracownik.pensja}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-warning" role="alert">
          Brak pracowników spełniających kryteria
        </div>
      )}
    </div>
export default App;
    </>
  )
}

export default App
