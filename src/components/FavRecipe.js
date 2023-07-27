import '../styles.css';

export default function FavRecipe({ recipe, label }) {

  const removeRecipe = (e, recipe) => {
    e.preventDefault();
    console.log(label);
  };

  return (
    <div className="favorites">
      <div className='fav-header'>
      <h2>{label}</h2>
      <button value={label} onClick={removeRecipe}>
          <ion-icon name="trash-outline"></ion-icon>
      </button>
      </div>
    </div>
  )
}
