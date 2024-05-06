function Team({name, trophies}) {
    const alertClass = `alert ${
        trophies > 10 ? 'alert-success' : trophies < 5 ? 'alert-danger' : 'alert-warning' 
      }`;
    return (
        <p className={alertClass}>
            Name:  {name} Palmares : <b>{trophies}</b> 
        </p>
    );
}

export default Team;