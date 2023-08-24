import { Curso } from "./curso";
import { Estudiante } from "./estudiante";
import { Materia } from "./materia";


export interface RegistroCurso {
  id: number;
  estudiante: Estudiante;
  materias: Materia[];
  profesorId: number;
  curso: Curso;
}
