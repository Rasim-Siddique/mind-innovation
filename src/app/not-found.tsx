import Link from "next/link";

export default function NotFound() {
  return (
    <div className="global">
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" > <button style={{background:'#338FFF', width:'300px', height:45, fontSize:22, border:'1px solid #338FFF', color:'white', borderRadius:20, cursor:'pointer'}}>Go To Home Page</button> </Link>
    </div>
  );
}