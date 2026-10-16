const $ = id => document.getElementById(id);
const mealNames = ["Breakfast", "Lunch", "Snacks", "Dinner"];
const mealMeta = {
  Breakfast: { emoji: "🌅", hint: "A fresh start to your day", cls: "breakfast" },
  Lunch: { emoji: "☀️", hint: "Your midday meal", cls: "lunch" },
  Snacks: { emoji: "🍊", hint: "Little bites and sips", cls: "snacks" },
  Dinner: { emoji: "🌙", hint: "Your evening meal", cls: "dinner" }
};
const foods = [
  {name:"Idli (1 medium)",calories:58,protein:2,carbs:12,fat:.2,fibre:.5},
  {name:"Plain dosa (1 medium)",calories:133,protein:3,carbs:20,fat:4,fibre:1},
  {name:"Poha (1 cup)",calories:250,protein:5,carbs:40,fat:8,fibre:3},
  {name:"Upma (1 cup)",calories:220,protein:5,carbs:35,fat:7,fibre:3},
  {name:"Roti / chapati (1 medium)",calories:110,protein:3.5,carbs:18,fat:3,fibre:3},
  {name:"Cooked rice (1 cup)",calories:205,protein:4.3,carbs:45,fat:.4,fibre:.6},
  {name:"Dal (1 cup)",calories:180,protein:10,carbs:27,fat:4,fibre:8},
  {name:"Paneer (100 g)",calories:265,protein:18,carbs:4,fat:20,fibre:0},
  {name:"Curd / dahi (1 cup)",calories:150,protein:8,carbs:11,fat:8,fibre:0},
  {name:"Sambar (1 cup)",calories:130,protein:6,carbs:20,fat:3,fibre:5},
  {name:"Chole (1 cup)",calories:260,protein:12,carbs:38,fat:7,fibre:10},
  {name:"Rajma (1 cup)",calories:225,protein:13,carbs:40,fat:2,fibre:11},
  {name:"Banana (1 medium)",calories:105,protein:1.3,carbs:27,fat:.4,fibre:3.1},
  {name:"Apple (1 medium)",calories:95,protein:.5,carbs:25,fat:.3,fibre:4.4},
  {name:"Boiled egg (1)",calories:78,protein:6.3,carbs:.6,fat:5.3,fibre:0},
  {name:"Milk (1 cup)",calories:122,protein:8,carbs:12,fat:5,fibre:0},
  {name:"Peanuts (30 g)",calories:170,protein:7,carbs:5,fat:14,fibre:2.5},
  {name:"Almonds (10)",calories:70,protein:2.5,carbs:2.5,fat:6,fibre:1.5},
  {name:"Vegetable pulao (1 cup)",calories:260,protein:5,carbs:42,fat:8,fibre:3},
  {name:"Chicken curry (1 cup)",calories:280,protein:25,carbs:8,fat:16,fibre:2}
];
const storageKey = "indianFoodDiary.v1";
let state = loadState();
// Older diary data may not yet have the saved-meals feature.
if (!Array.isArray(state.savedMeals)) state.savedMeals = [];
let toastTimer;
function todayISO(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;}
function loadState(){
  try { const s=JSON.parse(localStorage.getItem(storageKey)); if(s && s.days) return s; } catch(e){}
  return {targets:{calories:2000,protein:75,carbs:250,fat:65},days:{},savedMeals:[]};
}
function saveState(){localStorage.setItem(storageKey,JSON.stringify(state));}
function currentDate(){return $("diaryDate").value || todayISO();}
function dayData(date=currentDate()){if(!state.days[date])state.days[date]={entries:[]};return state.days[date];}
function uid(){return `${Date.now()}-${Math.random().toString(16).slice(2)}`;}
function sum(entries){return entries.reduce((a,e)=>{for(const k of ["calories","protein","carbs","fat","fibre"])a[k]+=(Number(e[k])||0)*(Number(e.qty)||1);return a;},{calories:0,protein:0,carbs:0,fat:0,fibre:0});}
function fmt(n){return Math.round(n*10)/10;}
function clampPct(value,goal){return goal>0?Math.max(0,Math.min(100,value/goal*100)):0;}
function datePretty(value){const d=new Date(`${value}T12:00:00`);return d.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"});}
function showToast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2400);}
function setBar(id,value,goal){$(id).style.width=`${clampPct(value,goal)}%`;}
function render(){
  const date=currentDate(), entries=dayData(date).entries, total=sum(entries), t=state.targets;
  $("dateLabel").textContent=date===todayISO()?"Today":datePretty(date);
  $("caloriesEaten").textContent=`${Math.round(total.calories)} kcal eaten`;
  $("caloriesGoal").textContent=t.calories?`Goal ${t.calories.toLocaleString()} kcal`:"No goal yet";
  $("caloriePercent").textContent=t.calories?`${Math.round(total.calories/t.calories*100)}%`:"—";
  $("caloriesLeft").textContent=t.calories?`${Math.max(0,Math.round(t.calories-total.calories)).toLocaleString()} kcal left`:"Set a target";
  $("calorieSub").textContent=t.calories?(total.calories>t.calories?"You've reached your goal — progress is information, not a grade.":"Keep logging as you go"):"Add your daily calorie goal";
  $("calorieRing").style.setProperty("--progress",`${clampPct(total.calories,t.calories)*3.6}deg`);
  setBar("calorieTrack",total.calories,t.calories);
  for(const [key,label] of [["protein","Protein"],["carbs","Carbs"],["fat","Fat"]]){
    $(key==="fat"?"fatEaten":`${key}Eaten`).textContent=fmt(total[key]);
    $(key==="fat"?"fatGoal":`${key}Goal`).textContent=t[key]?`Goal ${t[key]} g`:"No target";
    $(key==="fat"?"fatLeft":`${key}Left`).textContent=t[key]?`${fmt(Math.max(0,t[key]-total[key]))} g left`:"Set goal";
    setBar(key==="fat"?"fatTrack":`${key}Track`,total[key],t[key]);
  }
  $("fibreEaten").textContent=fmt(total.fibre);
  renderMeals(entries);
}
function renderMeals(entries){
  const root=$("mealsList");root.innerHTML="";
  for(const meal of mealNames){
    const items=entries.filter(e=>e.meal===meal), total=sum(items), meta=mealMeta[meal];
    const card=document.createElement("article");card.className="meal-card";
    const head=document.createElement("div");head.className="meal-head";
    head.innerHTML=`<div class="meal-title"><span class="meal-emoji ${meta.cls}">${meta.emoji}</span><div><h3>${meal}</h3><p>${meta.hint}</p></div></div><div class="meal-kcal">${Math.round(total.calories)} <small>kcal</small></div>`;
    const add=document.createElement("button");add.className="add-food-button";add.textContent="＋ Add food";add.addEventListener("click",()=>openFoodDialog(meal));
    card.append(head,add);
    if(!items.length){const empty=document.createElement("div");empty.className="empty-state";empty.textContent="Nothing logged yet — add your first food 🌱";card.append(empty);}
    else items.forEach(e=>{
      const row=document.createElement("div");row.className="food-entry";
      const name=document.createElement("div");name.innerHTML=`<strong>${escapeHTML(e.name)}</strong><small>${fmt(e.qty)} serving${Number(e.qty)===1?"":"s"} · ${Math.round(e.calories*e.qty)} kcal</small>`;
      const right=document.createElement("div");right.style.textAlign="right";
      const kcal=document.createElement("div");kcal.className="entry-kcal";kcal.textContent=`${Math.round(e.calories*e.qty)} kcal`;
      const actions=document.createElement("div");actions.className="entry-actions";
      const edit=document.createElement("button");edit.textContent="Edit";edit.addEventListener("click",()=>openFoodDialog(meal,e.id));
      const del=document.createElement("button");del.textContent="Delete";del.addEventListener("click",()=>{dayData().entries=dayData().entries.filter(x=>x.id!==e.id);saveState();render();showToast("Food removed from your diary");});
      actions.append(edit,del);right.append(kcal,actions);row.append(name,right);card.append(row);
    });
    const macros=document.createElement("div");macros.className="meal-macros";macros.innerHTML=`<span>Protein <b>${fmt(total.protein)}g</b></span><span>Carbs <b>${fmt(total.carbs)}g</b></span><span>Fat <b>${fmt(total.fat)}g</b></span><span>Fibre <b>${fmt(total.fibre)}g</b></span>`;card.append(macros);root.append(card);
  }
}
function escapeHTML(str){return String(str).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function openFoodDialog(meal="Breakfast",id=""){
  $("foodForm").reset();$("foodMeal").value=meal;$("foodQty").value=1;$("foodEditId").value=id;$("foodSearch").value="";$("foodSuggestions").innerHTML="";
  $("foodDialogTitle").textContent=id?"Edit food":"Add food";
  if(id){const e=dayData().entries.find(x=>x.id===id);if(e){$("foodMeal").value=e.meal;$("foodName").value=e.name;$("foodQty").value=e.qty;$("foodCalories").value=e.calories;$("foodProtein").value=e.protein;$("foodCarbs").value=e.carbs;$("foodFat").value=e.fat;$("foodFibre").value=e.fibre;}}
  $("foodDialog").showModal();setTimeout(()=>$("foodSearch").focus(),50);
}
function chooseFood(food){
  $("foodName").value=food.name;$("foodCalories").value=food.calories;$("foodProtein").value=food.protein;$("foodCarbs").value=food.carbs;$("foodFat").value=food.fat;$("foodFibre").value=food.fibre;
  $("foodSuggestions").innerHTML="";showToast(`${food.name} selected — check the portion and values`);
}
function renderSuggestions(){
  const q=$("foodSearch").value.trim().toLowerCase(), box=$("foodSuggestions");box.innerHTML="";
  if(!q)return;
  const matches=foods.filter(f=>f.name.toLowerCase().includes(q)).slice(0,7);
  matches.forEach(f=>{const b=document.createElement("button");b.type="button";b.className="suggestion";b.textContent=`${f.name} · ${f.calories} kcal`;b.addEventListener("click",()=>chooseFood(f));box.append(b);});
  if(!matches.length){const p=document.createElement("span");p.className="muted small";p.textContent="No quick match — enter your food and nutrition values below.";box.append(p);}
}
$("foodSearch").addEventListener("input",renderSuggestions);
$("foodForm").addEventListener("submit",e=>{
  e.preventDefault();
  const id=$("foodEditId").value;
  const entry={id:id||uid(),meal:$("foodMeal").value,name:$("foodName").value.trim(),qty:Number($("foodQty").value),calories:Number($("foodCalories").value),protein:Number($("foodProtein").value),carbs:Number($("foodCarbs").value),fat:Number($("foodFat").value),fibre:Number($("foodFibre").value)};
  if(!entry.name||entry.qty<=0)return;
  const list=dayData().entries;
  if(id){const i=list.findIndex(x=>x.id===id);if(i>=0)list[i]=entry;}else list.push(entry);
  saveState();$("foodDialog").close();render();showToast(id?"Food updated":"Food added to your diary");
});
function openTargets(){
  for(const k of ["calories","protein","carbs","fat"])$(`target${k[0].toUpperCase()+k.slice(1)}`).value=state.targets[k]||"";
  $("targetsDialog").showModal();
}
$("targetsForm").addEventListener("submit",e=>{
  e.preventDefault();
  for(const k of ["calories","protein","carbs","fat"]){const v=Number($(`target${k[0].toUpperCase()+k.slice(1)}`).value);state.targets[k]=v>0?v:0;}
  saveState();$("targetsDialog").close();render();showToast("Daily targets saved");
});
function showInfo(title,body){$("infoTitle").textContent=title;$("infoBody").innerHTML=body;$("infoDialog").showModal();}
function totalsInfo(){
  const total=sum(dayData().entries);
  showInfo("Food totals",`<div class="info-row"><span>Calories</span><strong>${Math.round(total.calories)} kcal</strong></div><div class="info-row"><span>Protein</span><strong>${fmt(total.protein)} g</strong></div><div class="info-row"><span>Carbohydrates</span><strong>${fmt(total.carbs)} g</strong></div><div class="info-row"><span>Fat</span><strong>${fmt(total.fat)} g</strong></div><div class="info-row"><span>Fibre</span><strong>${fmt(total.fibre)} g</strong></div><p class="muted small" style="margin-top:14px">Estimates depend on portion size and recipe. For packaged foods, use the nutrition label when available.</p>`);
}
$("targetsBtn").addEventListener("click",openTargets);$("settingsBtn").addEventListener("click",openTargets);
$("addFoodTop").addEventListener("click",()=>openFoodDialog("Breakfast"));
$("foodTotalsBtn").addEventListener("click",totalsInfo);
// Saved meals: save a breakfast/lunch/snack/dinner combination for quick reuse.
// The original food entries and daily totals are not changed by saving a meal.
function renderSavedMealsModal() {
  const body = $("infoBody");
  const selectedDate = currentDate();
  const mealOptions = mealNames.map(meal =>
    `<option value="${meal}">${meal}</option>`
  ).join("");

  const savedCards = state.savedMeals.length
    ? state.savedMeals.map(meal => {
        const entries = Array.isArray(meal.entries) ? meal.entries : [];
        const total = sum(entries);
        return `<div style="padding:12px 0;border-bottom:1px solid #e5e7eb">
          <div style="font-weight:700;overflow-wrap:anywhere">${escapeHTML(meal.name)}</div>
          <div class="muted small" style="margin:4px 0 10px">
            ${entries.length} food item${entries.length===1?"":"s"} · ${Math.round(total.calories)} kcal
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
            <label class="small" for="meal-destination-${escapeHTML(meal.id)}">Add to</label>
            <select id="meal-destination-${escapeHTML(meal.id)}" data-destination="${escapeHTML(meal.id)}"
              style="flex:1;min-width:100px;padding:8px;border:1px solid #ddd;border-radius:8px">
              ${mealNames.map(name => `<option value="${name}" ${name===meal.category?"selected":""}>${name}</option>`).join("")}
            </select>
            <button type="button" class="primary-button" data-add-saved="${escapeHTML(meal.id)}">Add</button>
            <button type="button" data-delete-saved="${escapeHTML(meal.id)}">Delete</button>
          </div>
        </div>`;
      }).join("")
    : `<p class="muted small">No saved meals yet. Log foods under Breakfast, Lunch, Snacks or Dinner, then save that combination here.</p>`;

  $("infoTitle").textContent = "My saved meals";
  body.innerHTML = `
    <p class="muted small">Save foods from <strong>${escapeHTML(datePretty(selectedDate))}</strong>
       and reuse them on any date.</p>
    <div style="display:grid;gap:8px;margin:12px 0 14px">
      <label for="saveMealCategory">Which meal should be saved?</label>
      <select id="saveMealCategory" style="padding:10px;border:1px solid #ddd;border-radius:8px">
        ${mealOptions}
      </select>
      <label for="savedMealName">Saved meal name</label>
      <input id="savedMealName" type="text" maxlength="80"
        placeholder="e.g. Poha and tea" style="width:100%;box-sizing:border-box;padding:10px;border:1px solid #ddd;border-radius:8px">
      <button type="button" class="primary-button" id="saveCurrentMealBtn">Save this meal</button>
    </div>
    <h3 style="margin:16px 0 8px">Your saved meals (${state.savedMeals.length})</h3>
    ${savedCards}
    <p class="muted small" style="margin-top:16px">Saved meals are stored only in this browser on this device.</p>`;

  if (!$("infoDialog").open) $("infoDialog").showModal();

  $("saveCurrentMealBtn").addEventListener("click", () => {
    const name = $("savedMealName").value.trim();
    const category = $("saveMealCategory").value;
    const entries = (dayData().entries || []).filter(e => e.meal === category);
    if (!name) { showToast("Enter a name for your saved meal"); return; }
    if (!entries.length) {
      showToast(`No foods logged under ${category} on this date`);
      return;
    }

    state.savedMeals.push({
      id: uid(),
      name,
      category,
      // Separate copies: editing a diary entry won't change saved meal nutrition.
      entries: entries.map(({id, ...e}) => ({...e}))
    });
    saveState();
    renderSavedMealsModal();
    showToast("Meal saved for future use");
  });

  body.querySelectorAll("[data-add-saved]").forEach(button => {
    button.addEventListener("click", () => {
      const saved = state.savedMeals.find(meal => meal.id === button.dataset.addSaved);
      if (!saved || !Array.isArray(saved.entries) || !saved.entries.length) return;
      const category = body.querySelector(`[data-destination="${button.dataset.addSaved}"]`).value;
      dayData().entries.push(...saved.entries.map(e => ({...e, id: uid(), meal: category})));
      saveState();
      render();
      $("infoDialog").close();
      showToast("Saved meal added to your diary");
    });
  });

  body.querySelectorAll("[data-delete-saved]").forEach(button => {
    button.addEventListener("click", () => {
      const saved = state.savedMeals.find(meal => meal.id === button.dataset.deleteSaved);
      if (!saved) return;
      if (!confirm(`Delete saved meal "${saved.name}"? This won't remove food already logged.`)) return;
      state.savedMeals = state.savedMeals.filter(meal => meal.id !== saved.id);
      saveState();
      renderSavedMealsModal();
      showToast("Saved meal deleted");
    });
  });
}
$("savedMealsBtn").addEventListener("click", renderSavedMealsModal);

// Copy foods from the immediately preceding calendar date.
// Ask permission rather than silently replacing the selected day's entries.
$("copyYesterdayBtn").addEventListener("click", () => {
  const date = new Date(`${currentDate()}T12:00:00`);
  date.setDate(date.getDate() - 1);
  const previousDate = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
  const source = state.days[previousDate]?.entries || [];
  if (!source.length) {
    showToast("No foods recorded on the previous day");
    return;
  }
  const currentEntries = dayData().entries;
  if (currentEntries.length && !confirm(
    "This day already has foods logged. Replace them with the previous day's foods?"
  )) return;

  dayData().entries = source.map(e => ({...e, id: uid()}));
  saveState();
  render();
  showToast("Previous day's foods copied successfully");
});
$("diaryDate").value=todayISO();
$("diaryDate").addEventListener("change",render);
function shiftDate(delta){const d=new Date(`${currentDate()}T12:00:00`);d.setDate(d.getDate()+delta);$("diaryDate").value=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;render();}
$("prevDay").addEventListener("click",()=>shiftDate(-1));$("nextDay").addEventListener("click",()=>shiftDate(1));
document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",()=>$(b.dataset.close).close()));
$("calorieRing").addEventListener("click",openTargets);
render();
