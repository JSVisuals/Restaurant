const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const form=document.getElementById("bookingForm");
const status=document.getElementById("formStatus");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(form);
  const name=data.get("name"), phone=data.get("phone"), date=data.get("date"), guests=data.get("guests"), time=data.get("time"), message=data.get("message");
  const text=`Hello JS Restaurant!%0A%0AI'd like to book a table.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ADate: ${encodeURIComponent(date)}%0AGuests: ${encodeURIComponent(guests)}%0ATime: ${encodeURIComponent(time)}%0AMessage: ${encodeURIComponent(message||"None")}`;
  status.textContent="Opening WhatsApp to confirm your booking...";
  window.open(`https://wa.me/916301865012?text=${text}`,"_blank","noopener");
});
