import "./App.css";
import React, { useState } from "react";
import Card from "../src/components/index";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    if (studentName === "") {
      alert("Por favor digite  seu nome");
      return;
    }
    const newStudent = {
      nome: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
    setStudentName("");
  }

  //
  function handleChange(e) {
    setStudentName(e.target.value);
  }

  return (
    <div className="container">
      <h1>Lista de convidados</h1>
      <input
        type="text"
        placeholder="Digite o nome"
        onChange={handleChange}
        value={studentName}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student, index) => (
        <Card key={index} name={student.nome} time={student.time} />
      ))}
    </div>
  );
}

export default App;
