function TodoIteam({todoname,tododate,onDeleteClick}){
  return  <div className="contanier"> <div class="row kg-row">
<div class="col-6">
 {todoname}</div>
<div class="col-4">
{tododate}
</div>
<div class="col-2">
<button type="button" class="btn btn-danger
 kg-button" onClick={() => onDeleteClick(todoname)}>Dlt</button>
</div>
</div>
</div>
}


export default TodoIteam ;