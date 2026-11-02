
const LANG_KEY='bbc-lang';
function getLang(){return localStorage.getItem(LANG_KEY)||'en'}
function applyLang(lang){
  localStorage.setItem(LANG_KEY,lang);
  document.documentElement.lang=lang; document.documentElement.dir=(lang==='ar'?'rtl':'ltr');
  document.querySelectorAll('[data-en]').forEach(el=>{ el.textContent = lang==='ar' ? (el.dataset.ar||el.dataset.en) : el.dataset.en; });
  const b=document.getElementById('langBtn'); if(b) b.textContent = lang==='ar' ? 'English' : 'العربية';
  if(typeof renderCourses==='function' && document.getElementById('courseGrid')) renderCourses(window.__filter||'all',lang);
  if(typeof renderCourseDetail==='function' && document.getElementById('courseDetail')) renderCourseDetail(lang);
}
document.addEventListener('DOMContentLoaded',()=>{
  const b=document.getElementById('langBtn'); if(b) b.addEventListener('click',()=>applyLang(getLang()==='ar'?'en':'ar'));
  applyLang(getLang());
  // filters
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    window.__filter=btn.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('teal'));
    btn.classList.add('teal'); renderCourses(window.__filter,getLang());
  }));
  // generic mock forms
  document.querySelectorAll('form[data-mock]').forEach(f=>f.addEventListener('submit',e=>{
    e.preventDefault(); const out=document.getElementById(f.dataset.mock); if(out){ out.hidden=false; out.scrollIntoView({behavior:'smooth'}); }
  }));
});
// Courses mock data (DEMO names, NOT real academy staff/prices)
const COURSES=[
 {id:'general-a1',level:'Beginner',en:'General English A1',ar:'الإنجليزية العامة A1',desc_en:'Speak, listen, read and write with confidence from the very first lesson.',desc_ar:'تحدث واستمع واقرأ واكتب بثقة من الدرس الأول.',weeks:8,lessons:24},
 {id:'general-a2',level:'Elementary',en:'General English A2',ar:'الإنجليزية العامة A2',desc_en:'Build everyday vocabulary, grammar and conversation for daily life.',desc_ar:'بناء مفردات وقواعد ومحادثة يومية للحياة اليومية.',weeks:8,lessons:24},
 {id:'general-b1',level:'Intermediate',en:'General English B1',ar:'الإنجليزية العامة B1',desc_en:'Discuss opinions, tell stories and handle travel and work situations.',desc_ar:'ناقش الآراء واحكِ القصص وتعامل مع مواقف السفر والعمل.',weeks:10,lessons:30},
 {id:'general-b2',level:'Intermediate',en:'General English B2',ar:'الإنجليزية العامة B2',desc_en:'Debate, present and write clearly for study and professional use.',desc_ar:'ناقش وقدّم واكتب بوضوح للدراسة والاستخدام المهني.',weeks:10,lessons:30},
 {id:'ielts',level:'Advanced',en:'IELTS Preparation',ar:'التحضير لاختبار IELTS',desc_en:'Exam strategies, timed practice and feedback on all four skills.',desc_ar:'استراتيجيات الامتحان وتدريب موقوت وملاحظات على المهارات الأربع.',weeks:6,lessons:18},
 {id:'kids',level:'Beginner',en:'English for Young Learners',ar:'الإنجليزية للصغار',desc_en:'Playful, speaking-first classes for children and teenagers.',desc_ar:'حصص ممتعة تركّز على التحدث للأطفال والمراهقين.',weeks:8,lessons:24},
 {id:'business',level:'Advanced',en:'Business English',ar:'إنجليزية الأعمال',desc_en:'Meetings, emails, presentations and interviews in professional English.',desc_ar:'اجتماعات ورسائل وعروض ومقابلات بالإنجليزية المهنية.',weeks:8,lessons:24},
 {id:'conversation',level:'Elementary',en:'Conversation Club',ar:'نادي المحادثة',desc_en:'Weekly speaking practice on real-life topics, in small groups.',desc_ar:'تدريب أسبوعي على التحدث حول مواضيع واقعية في مجموعات صغيرة.',weeks:4,lessons:8},
];
function renderCourses(filter,lang){
  const grid=document.getElementById('courseGrid'); if(!grid) return;
  const list=COURSES.filter(c=>filter==='all'||c.level===filter);
  grid.innerHTML=list.map(c=>`<article class="card"><span class="tag">${c.level}</span><h3>${lang==='ar'?c.ar:c.en}</h3><p class="muted">${lang==='ar'?c.desc_ar:c.desc_en}</p><p><strong>${c.weeks}</strong> ${lang==='ar'?'أسابيع':'weeks'} · <strong>${c.lessons}</strong> ${lang==='ar'?'درس':'lessons'}</p><p><a class="btn small" href="course.html?id=${c.id}">${lang==='ar'?'التفاصيل والتسجيل':'Details & enrol'}</a></p></article>`).join('') || `<p class="muted">No courses in this level.</p>`;
}
function renderCourseDetail(lang){
  const params=new URLSearchParams(location.search); const c=COURSES.find(x=>x.id===params.get('id'))||COURSES[0];
  const el=document.getElementById('courseDetail'); if(!el) return;
  el.innerHTML=`<span class="tag">${c.level}</span><h1>${lang==='ar'?c.ar:c.en}</h1><p class="muted">${lang==='ar'?c.desc_ar:c.desc_en}</p><p><strong>${c.weeks}</strong> ${lang==='ar'?'أسابيع':'weeks'} · <strong>${c.lessons}</strong> ${lang==='ar'?'درس':'lessons'} · ${lang==='ar'?'الرسوم عند الاستفسار':'Fees on enquiry'}</p><div class="grid grid2"><div class="card"><h3>${lang==='ar'?'ماذا ستتعلم؟':'What you will learn'}</h3><ul><li>Speaking & listening</li><li>Reading & writing</li><li>Vocabulary & grammar</li><li>Real-life practice</li></ul></div><div class="card"><h3>${lang==='ar'?'تفاصيل الدورة':'Course details'}</h3><p>Small groups and speaking-first lessons. Your schedule and group are confirmed when you book.<br>${lang==='ar'?'تُؤكَّد المواعيد والمجموعة عند الحجز.':'Schedule and group are confirmed when you book.'}</p><p><a class="btn" href="booking.html">${lang==='ar'?'احجز مقعدك':'Book your seat'}</a></p></div></div>`;
}
// Placement quiz (mock, 6 questions)
const QUIZ=[
 {q_en:'Choose the correct sentence.',q_ar:'اختر الجملة الصحيحة.',o:['I am go to school.','I go to school.','I going school.'],a:1},
 {q_en:'She ___ a teacher.',q_ar:'هي ___ معلمة.',o:['is','are','am'],a:0},
 {q_en:'Past of “go” is ___.',q_ar:'الماضي من “go” هو ___.',o:['goed','went','gone to'],a:1},
 {q_en:'“I have lived here ___ 2020.”',q_ar:'“I have lived here ___ 2020.”',o:['for','since','from'],a:1},
 {q_en:'Which is most formal?',q_ar:'أيها الأكثر رسمية؟',o:['Wanna come?','Could you please join us?','Come now!'],a:1},
 {q_en:'“Despite the rain, ___.”',q_ar:'“Despite the rain, ___.”',o:['we went out','we go yesterday','we are go'],a:0},
];
let quizIdx=0, quizScore=0;
function quizStart(){ quizIdx=0; quizScore=0; quizShow(); }
function quizShow(){
  const box=document.getElementById('quizBox'); if(!box) return;
  const lang=getLang();
  if(quizIdx>=QUIZ.length){
    const lvl=quizScore<=2?'Beginner (A1–A2)':quizScore<=4?'Intermediate (B1)':'Advanced (B2+)';
    box.innerHTML=`<div class="success"><h3>${lang==='ar'?'نتيجتك':'Your result'}</h3><p>${quizScore} / ${QUIZ.length} — <strong>${lvl}</strong></p><p>${lang==='ar'?'استخدم هذه النتيجة كدليل لاختيار مستواك.':'Use this result as a guide to choose your level.'}</p><p><a class="btn" href="courses.html">${lang==='ar'?'تصفح الدورات':'Browse courses'}</a> <button class="btn outline" onclick="quizStart()">${lang==='ar'?'إعادة الاختبار':'Retake'}</button></p></div>`; return;
  }
  const q=QUIZ[quizIdx];
  box.innerHTML=`<p><strong>${lang==='ar'?'السؤال':'Question'} ${quizIdx+1} / ${QUIZ.length}</strong></p><h3>${lang==='ar'?q.q_ar:q.q_en}</h3>`+q.o.map((o,i)=>`<button class="quiz-opt" onclick="quizAnswer(${i})">${o}</button>`).join('');
}
function quizAnswer(i){ if(i===QUIZ[quizIdx].a) quizScore++; quizIdx++; quizShow(); }

// Hamburger navigation (mobile): toggle panel, close on link click.
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));
});

// Subtle scroll reveal (ui-ux-pro-max: 8-16px, 350ms). Content stays visible
// without JS: the .reveal hidden state only applies when this class is set.
document.addEventListener('DOMContentLoaded', () => {
  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
