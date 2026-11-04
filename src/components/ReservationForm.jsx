import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
export default function ReservationForm(){const [sent,setSent]=useState(false);const [form,setForm]=useState({name:"",email:"",phone:"",date:"",time:"",guests:"2 guests",notes:""});const update=e=>setForm({...form,[e.target.name]:e.target.value});const submit=e=>{e.preventDefault();setSent(true)};return sent?<div className="success-state"><CheckCircle2 size={42}/><h3>Thanks, {form.name.split(" ")[0]}!</h3><p>Your reservation request has been received. Our team will contact you shortly to confirm.</p><button className="btn btn-dark" onClick={()=>setSent(false)}>Make another request</button></div>:<form className="reservation-form" onSubmit={submit}>
  <label>Your name<input required name="name" value={form.name} onChange={update} placeholder="Full name"/></label>
  <label>Email address<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com"/></label>
  <label>Phone number<input required type="tel" name="phone" value={form.phone} onChange={update} placeholder="+91"/></label>
  <label>Date<input required type="date" min={new Date().toISOString().split("T")[0]} name="date" value={form.date} onChange={update}/></label>
  <label>Preferred time<select required name="time" value={form.time} onChange={update}><option value="">Choose a time</option>{["12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM"].map(t=><option key={t}>{t}</option>)}</select></label>
  <label>Number of guests<select name="guests" value={form.guests} onChange={update}>{["1 guest","2 guests","3 guests","4 guests","5 guests","6 guests","7+ guests"].map(t=><option key={t}>{t}</option>)}</select></label>
  <label className="full-field">Special requests<textarea name="notes" value={form.notes} onChange={update} placeholder="Celebration, dietary needs, seating preference..." rows="3"/></label>
  <button className="btn btn-dark full-field" type="submit">Request a reservation <span>↗</span></button>
  <p className="form-note full-field">This demo form displays a confirmation only. Connect it to your booking service or backend to receive real reservations.</p>
</form>}