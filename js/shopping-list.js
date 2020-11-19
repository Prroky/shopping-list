var ShoppingList = function(elmId, inputData) {
  this._ec = [];

  this._dom = {
    tableBody: $.gel(elmId.tableBodyId), // Vezme tableBodyId a uloží jí do property tableBody 
    addItemButton: $.gel(elmId.addItemButtonId), // Vezme addItemButtonId a uloží jej do property addItemButton 
    submitFormButton: $.gel(elmId.submitFormButtonId), // Vezme submitFormButton Id a uloží jí do property submitFormButton
    calculateButton: $.gel(elmId.calculateButtonId), // Vezme calculateButtonId a uloží jej do property calculateButton
    totalPriceInput: $.gel(elmId.totalPriceInputId) // Vezme totalPriceInputId a uloží jej do property totalPriceIpnut
  };

  this._buildDOMbyData(inputData); // Volání metody buildDOMbyData s parametrem inputData
  this._addEventListeners(); // Volání metody addEventListeners, která nemá žádný parametr
};

// Metoda addEventListeners
ShoppingList.prototype._addEventListeners = function() {
  this._ec.push($.addListener(this._dom.addItemButton, 'click', this, '_addRowEventHandler'));
  this._ec.push($.addListener(this._dom.submitFormButton, 'click', this, '_submitTableDataEventHandler'));
  this._ec.push($.addListener(this._dom.calculateButton, 'click', this, '_calculateEventHandler'));
  this._ec.push($.addListener(window, 'load', this, '_calculateEventHandler'));
};

// Metoda _calculate
ShoppingList.prototype._calculate = function() {
  var itemPriceInputElms = $('.item-price'); // lokální proměnná itemPriceInputElms
  var amountInputElms = $('.amount'); // lokální proměnná amountInputElms
  var productPriceElms = $('.product-price'); //lokální proměnná productPriceElms
  var totalPrice = 0; //lokální proměnná totalPrice, které nastavujeme počáteční hodnotu 0
  // Cyklus for, v první části nastavujeme proměnnou i na 0, poté do proměnné len ukládáme pomocí vlastnosti length délku itemPriceInputElms, vytvoříme podmínku a poté zvětšujeme i o 1
  for (var i=0, len=itemPriceInputElms.length; len>i; i++) {
    productPriceElms[i].value = itemPriceInputElms[i].value * amountInputElms[i].value;
    totalPrice += Number(productPriceElms[i].value);
  }

  this._dom.totalPriceInput.value = totalPrice;
};

//Metoda _calculateEventHandler
ShoppingList.prototype._calculateEventHandler = function() {
  this._calculate(); //Volání metody _calculate
};


//Metoda pro vytvoření Domu z obrdržených dat. 
ShoppingList.prototype._buildDOMbyData = function(data) {
  for (var i=0, len=data.length; len>i; i++) {
    this._addRow(data[i]); // Volání metody s parametrem data [i], která přidá řádek.
  }
};

// přidá prázdný řádek
ShoppingList.prototype._addRowEventHandler = function() {
  this._addRow();
};


ShoppingList.prototype._addRow = function(data) {
  // vytváří prázdný element někde v paměti
  var rowElm = $.cel('tr');

  // připne element do DOM
  this._dom.tableBody.appendChild(rowElm);

  var attr = [
    { type: 'text' },
    { type: 'number', className: 'item-price' },
    { type: 'number', className: 'amount' },
    { type: 'number', className: 'product-price' }
  ];

  // přidá k jednotlivým atributům hodnotu, pouze pokud máme k dispozici vstupní data
  if (data) {
    attr[0].value = data.item;
    attr[1].value = data.price;
    attr[2].value = data.amount;

    attr[0].disabled = true;
    attr[1].disabled = true;
    attr[3].disabled = true;
  } 
  else {
    attr[3].disabled = true;
  }

  // přidá jednotlivé sloupce i s atributy
  for (var i=0; attr.length>i; i++) {
    this._addCol(rowElm, attr[i]);
  }
};

ShoppingList.prototype._addCol = function(rowElm, attr) {
  var colElm = $.cel('td');
  rowElm.appendChild(colElm);

  var inputElm = $.cel('input');
  colElm.appendChild(inputElm);

  for (var prop in attr) {
    inputElm[prop] = attr[prop];
  }
};

ShoppingList.prototype._submitTableDataEventHandler = function(e) {
  if (e) {
    $.cancelEvent(e);
  }
  console.log(this._formData);
  
  
};

