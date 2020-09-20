//Postman autotests (JavaScript) - examples 1

//1. Correct response format JSON
pm.test("Correct response format JSON", function() {
pm.response.to.have.jsonBody()
});

//2. We have all the declared fields in the response
pm.test("Check that we have all declared fields", function() {
const jsonData = pm.response.json();
 pm.expect(jsonData).to.have.property("people");
pm.expect(jsonData).to.have.property("planets");
pm.expect(jsonData).to.have.property("films");
pm.expect(jsonData).to.have.property("species");
pm.expect(jsonData).to.have.property("vehicles");
pm.expect(jsonData).to.have.property("starships");
});

//3. Field value isn’t NULL
pm.test("Check if value isn’t NULL ! ! !", function () {
var jsonData = pm.response.json();
pm.expect(jsonData.people).not.equal(null);          
pm.expect(jsonData.planets).not.equal(null);
pm.expect(jsonData.films).not.equal(null);
pm.expect(jsonData.species).not.equal(null);
pm.expect(jsonData.vehicles).not.equal(null);
pm.expect(jsonData.starships).not.equal(null);
});

//4. Check if value isn’t empty
pm.test("Check if value isn’t empty", function () {
var jsonData = pm.response.json();
pm.expect(jsonData.people).not.equal("");          
pm.expect(jsonData.planets).not.equal("");
pm.expect(jsonData.films).not.equal("");
pm.expect(jsonData.species).not.equal("");
pm.expect(jsonData.vehicles).not.equal("");
pm.expect(jsonData.starships).not.equal("");
});

//5. Check if field corresponds to specific value
pm.test("Check if field corresponds to specific value", function () {
var jsonData = pm.response.json();
pm.expect(jsonData.people).to.equal("http://swapi.dev/api/people/");          
pm.expect(jsonData.planets).to.equal("http://swapi.dev/api/planets/");
pm.expect(jsonData.films).to.equal("http://swapi.dev/api/films/");
pm.expect(jsonData.species).to.equal("http://swapi.dev/api/species/");
pm.expect(jsonData.vehicles).to.equal("http://swapi.dev/api/vehicles/");
pm.expect(jsonData.starships).to.equal("http://swapi.dev/api/starships/");
});

//6. Status code is 200
pm.test("Status code is 200", function () {
   pm.response.to.have.status(200);
});

//7. Status message is OK
pm.test("Status message is OK", function () {
   pm.response.to.have.status("OK");
});

//8. Response time is less than 1000ms
pm.test("Response time is less than 1000ms", function () {
   pm.expect(pm.response.responseTime).to.be.below(1000);
});

//9. There is a specific header in the response
pm.test("There is a specific header in the response", function () {
   pm.response.to.have.header("Content-Type");
});

//10. The response has a specific header with a specific value
pm.test("The response has a specific header with a specific value", function () {
   pm.response.to.be.header("Content-Type", "application/json");
});

//11. Coоkie exists
pm.test("Cookie exists", function () {
pm.cookies.has("") //здесь будет значение куки
});

//12. Coоkie has value
pm.test("Cookie has value", function () {
try{
 var MY_COOKIE = pm.cookies.get("__cfduid");
console.log(MY_COOKIE);
} catch (e) {
console.log("SOME PROBLEM WITH COOKIE ->" + e)
}
});

