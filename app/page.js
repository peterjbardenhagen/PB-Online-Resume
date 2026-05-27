"use client";

export default function Home() {
  return (
    <main style={{padding:'40px',fontFamily:'Inter, sans-serif',background:'#08101c',minHeight:'100vh',color:'#f8fafc'}}>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>
        <h1 style={{fontSize:'28px',margin:0}}>Peter Bardenhagen</h1>
        <nav style={{display:'flex',gap:'20px',alignItems:'center'}}>
          <a href="#career-story" style={{color:'#cbd5e1'}}>Career Story</a>
          <a href="#references" style={{color:'#cbd5e1'}}>References</a>
          <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 16px',background:'linear-gradient(135deg,#0e7c7b,#2563eb)',borderRadius:'12px',whiteSpace:'nowrap'}}>
            <span>✉️</span>
            <a href="mailto:peter@bardenhagen.xyz" style={{color:'white',textDecoration:'none',whiteSpace:'nowrap'}}>peter@bardenhagen.xyz</a>
          </div>
        </nav>
      </header>

      <section style={{padding:'80px 0'}}>
        <p style={{color:'#34d399',fontWeight:700,letterSpacing:'0.08em'}}>AVAILABLE FOR NEW ROLES</p>
        <h2 style={{fontSize:'64px',lineHeight:1.05,maxWidth:'900px'}}>Senior Solution Architect, Product Lead & AI Practitioner</h2>
        <p style={{fontSize:'22px',maxWidth:'900px',color:'#cbd5e1',lineHeight:1.7}}>
          20+ years delivering enterprise transformation initiatives across government, healthcare, energy and financial services.
        </p>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'20px',marginTop:'40px'}}>
          <div style={{padding:'24px',borderRadius:'24px',background:'rgba(255,255,255,0.06)',backdropFilter:'blur(16px)'}}>
            <h3>20+ Years</h3>
            <p>Enterprise delivery leadership</p>
          </div>
          <div style={{padding:'24px',borderRadius:'24px',background:'rgba(255,255,255,0.06)',backdropFilter:'blur(16px)'}}>
            <h3>100's of projects</h3>
            <p>Ranging from $500k to $10m</p>
          </div>
          <div style={{padding:'24px',borderRadius:'24px',background:'rgba(255,255,255,0.06)',backdropFilter:'blur(16px)'}}>
            <h3>AI + Architecture</h3>
            <p>Modern cloud and intelligent systems</p>
          </div>
        </div>
      </section>

      <section id="career-story" style={{padding:'40px 0'}}>
        <h2 style={{fontSize:'42px'}}>Career Story</h2>
        <p style={{fontSize:'18px',lineHeight:1.9,color:'#e2e8f0',maxWidth:'1000px'}}>
          Peter combines executive communication, solution architecture and hands-on engineering leadership to deliver complex digital programs.
          He has led hundreds of projects spanning architecture strategy, cloud migration, AI implementation and enterprise product delivery.
        </p>
      </section>

      <section style={{padding:'60px 0'}}>
        <h2 style={{fontSize:'42px'}}>3D Capability Cloud</h2>
        <div style={{position:'relative',height:'340px',borderRadius:'32px',overflow:'hidden',background:'radial-gradient(circle at top,#1e3a8a,#08101c)',border:'1px solid rgba(255,255,255,0.12)'}}>
          <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap',gap:'16px',padding:'40px'}}>
            {['TOGAF','Azure AI','OpenAI','Architecture','Leadership','React','Product Strategy','Cloud','DevOps','AI Engineering','Transformation','Enterprise UX'].map((item)=>(
              <div key={item} style={{padding:'12px 18px',borderRadius:'999px',background:'rgba(255,255,255,0.08)',boxShadow:'0 0 25px rgba(59,130,246,0.45)',border:'1px solid rgba(255,255,255,0.12)',animation:'pulse 6s infinite'}}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="references" style={{padding:'60px 0'}}>
        <h2 style={{fontSize:'42px'}}>What Colleagues Say</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'24px'}}>
          {[1,2,3].map((card)=>(
            <div key={card} style={{padding:'28px',borderRadius:'28px',background:'linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))',border:'1px solid rgba(255,255,255,0.12)',boxShadow:'0 20px 50px rgba(0,0,0,0.35)'}}>
              <p style={{fontSize:'18px',lineHeight:1.8,color:'#e2e8f0'}}>
                “Peter consistently bridges business and engineering with exceptional clarity and delivery focus.”
              </p>
              <div style={{marginTop:'20px',color:'#34d399',fontWeight:700}}>Senior Technology Executive</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'60px 0'}}>
        <h2 style={{fontSize:'42px'}}>Qualify Me for Your Role</h2>
        <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
          <input placeholder="Tell me about your role" style={{flex:'1 1 400px',padding:'16px',borderRadius:'14px',border:'1px solid rgba(255,255,255,0.12)',background:'rgba(255,255,255,0.06)',color:'white'}} />
          <button style={{padding:'16px 28px',borderRadius:'14px',border:'none',background:'linear-gradient(135deg,#0e7c7b,#2563eb)',color:'white',fontWeight:700}}>Send</button>
        </div>
      </section>
    </main>
  )
}
