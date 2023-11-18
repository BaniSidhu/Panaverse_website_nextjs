'use client'
import YouTube from 'react-youtube';

export default function Home() {
  const videoId = '7X-TfHa3Q74';

  return (
    <main>
      <div style={{ backgroundColor: '#6A0000', width: '100%', height: '200px' }}>
        <h1 style={{ textAlign: 'center', color: 'white', fontSize: '60px', fontFamily: 'sans-serif' }}>Quater 2 Batch 50</h1>
        <h2 style={{ textAlign: 'center', color: 'white', fontSize: '50px', fontFamily: 'sans-serif' }}>Let's Start Nextjs. We have successful projects in FSD, LHR & ISB</h2>
      </div>

      <div style={{ width: '500px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
        <p style={{ textAlign: 'center', color: 'green', fontSize: '18px' }}>
          Next.js is an open-source web development framework created by the private company Vercel
          providing React-based web applications with server-side rendering and static website generation.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
        <img src="/DAO.png" width={500} height={300} alt="" />
      </div>

      <br />
      <br />

      <h1 style={{ textAlign: 'center', fontSize: '30px', fontFamily: 'sans-serif', padding: '10px 10px' }}>Program of Studies</h1>

      <div style={{fontWeight:"bolder" ,textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif', padding: '10px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
        <p style={{ fontSize: '15px', width: '50%' ,fontWeight:"bold"}}>
          This curriculum is designed for individuals at an entry level who aspire to gain proficiency in software development comprehensively.
          <br /> The initial two quarters are universal, catering to various specializations, and are specifically tailored for the in-depth exploration of Object-Oriented Programming principles and advanced Full-Stack Web 2.0 development techniques.
          Envisaged as a year-long hybrid program, it integrates both in-person and online instruction, divided into four quarters, each spanning 13 weeks.
          <br /> The program places a strong emphasis on experiential learning, guiding students in the creation of practical projects. In order to accommodate diverse schedules, classes are predominantly scheduled during weekends or post 6:00 p.m. (Pakistan Time) on weekdays.
          The pedagogical approach employed is hybrid, incorporating essential on-site classes complemented by online Zoom laboratories.
        </p>
      </div>

      <img src="/DAO2.jpg" width={500} height={300} style={{ padding: '20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }} alt="" />
      
    

      <br />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', fontSize: '30px', fontFamily: 'sans-serif', textDecoration: 'underline', fontWeight: 'bold' }}>SO GUYS HERE IS MY INSPIRATION</div>

      <br />
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto'}}>
      <YouTube
        videoId={videoId}
        opts={{
          height: '390',
          width: '640',
          playerVars: {
            autoplay: 1,
          },
        }}
      />
      </div>
      <br />
      <table style={{ borderCollapse: 'collapse', border: '4px solid #6A0000', width: '70%', margin: 'auto', boxShadow: '0px 0px 10px #888888' }}>
  <thead style={{ textAlign: 'center', borderCollapse: 'collapse', borderBottom: '4px solid #6A0000', background: '#6A0000', padding: '15px',color:"white" }}>
    <tr>
      <th style={{ borderCollapse: 'collapse', borderRight: '2px solid #6A0000', padding: '15px', fontWeight: 'bold' }}>Name</th>
      <th style={{ borderCollapse: 'collapse', padding: '15px', fontWeight: 'bold' }}>Batch</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ textAlign: 'center', borderCollapse: 'collapse', borderBottom: '2px solid #6A0000' }}>
      <td style={{ borderCollapse: 'collapse', borderRight: '2px solid #6A0000', padding: '10px', fontWeight: 'bold' }}>Fatima Rasheed</td>
      <td style={{ borderCollapse: 'collapse', padding: '10px', fontWeight: 'bold' }}>Quater 2</td>
    </tr>
    <tr style={{ textAlign: 'center', borderCollapse: 'collapse', borderBottom: '2px solid #6A0000' }}>
      <td style={{ borderCollapse: 'collapse', borderRight: '2px solid #6A0000', padding: '10px', fontWeight: 'bold' }}>Bassam Tanvir</td>
      <td style={{ borderCollapse: 'collapse', padding: '10px', fontWeight: 'bold' }}>Quater 2</td>
    </tr>
    <tr style={{ textAlign: 'center', borderCollapse: 'collapse', borderBottom: '2px solid #6A0000' }}>
      <td style={{ borderCollapse: 'collapse', borderRight: '2px solid #6A0000', padding: '10px', fontWeight: 'bold' }}>Abu Hurairah</td>
      <td style={{ borderCollapse: 'collapse', padding: '10px', fontWeight: 'bold' }}>Quater 4</td>
    </tr>
  </tbody>
</table>

<br />
      <div style={{color:"white" ,display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#6A0000', margin: 'auto', padding: '25px 25px', fontSize: '30px' }}>
        <h1 style={{color:"white"}}>Contact US : </h1>
        <span style={{ padding: '10px 10px',color:"white" }}> Facebook: Panaverse@yahoo.com</span> <br />
        <span style={{color:"white"}}>Whatsapp: 0309-98989899</span>
      </div>
    </main>
  )
}
