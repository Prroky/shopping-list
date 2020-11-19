<!DOCTYPE html>
<html>
<head>
  <?php require_once('templates/common.php'); ?>
  <title>Nákupní seznam</title>
</head>
<body>
  <?php  require_once('templates/header.php'); ?>

  <h1>Nákupní seznam</h1>
    <div class="container">
      <table class="table table-dark table-responsive-md nakupni_seznam">
        <thead>
          <tr>
            <!-- <th scope="col">#</th> -->
            <th scope="col">Zboží</th>
            <th scope="col">Cena za ks</th>
            <th scope="col">Počet</th>
            <th scope="col">Cena celkem</th>
          </tr>
        </thead>
        <tbody id="tableContent">
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>Celková cena:</td>
            <td><input id="totalPriceInput" type="text" disabled="true"></td>
          </tr>
        </tfoot>
      </table>
      <button id="addItemButton" type="button" class="btn btn-primary">Přidat položku</button>
      <button id="submitFormButton" type="button" class="btn btn-danger">Odeslat</button>
      <button id="calculateButton" type="button" class="btn btn-warning">Spočítej celkovou cenu</button>
    </div>
  
  <script>
    var inputData = [
      { item: 'Hrábě', price: 90, amount: 1 },
      { item: 'Koště', price: 25, amount: 2 },
      { item: 'Rýč', price: 120 },
      { item: 'Krumpáč', price: 160 },
      { item: 'Lopata', price: 70 }
    ];

    var shoppingList = new ShoppingList(
      {
        tableBodyId: 'tableContent',
        addItemButtonId: 'addItemButton',
        submitFormButtonId: 'submitFormButton',
        calculateButtonId: 'calculateButton',
        totalPriceInputId: 'totalPriceInput'
      },
      inputData
    );
  </script>

  <?php  require_once('templates/footer.php'); ?>
</body>
</html>


      <!-- <tr>
        <th scope="row">1</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr> -->
