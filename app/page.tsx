import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import "./sani-style.css";

export default function CVOnline(){
  return(
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
    </section>

  )
}

