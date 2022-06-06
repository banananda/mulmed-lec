(function(window, document, undefined){

// code that should be taken care of right away

window.onload = init;

  function init(){
    // the code to be called when the dom has loaded
    // #document has its nodes
    var myFoot = document.getElementsByTagName("footer")[0];
    var myNav = document.getElementById("float-nav");
    var myContent = document.getElementsByClassName("content")[0];
    var myNavContainer = document.getElementsByClassName("navigation")[0];
    var myHeader = document.getElementsByTagName("header")[0];
    var section1 = document.getElementById("section-1");
    var implementation = document.getElementsByClassName("code")[1];
    implementation.innerHTML = `// C++ program for Merge Sort<br>
#include <iostream><br>
using namespace std;<br>
<br>
// Merges two subarrays of array[].<br>
// First subarray is arr[begin..mid]<br>
// Second subarray is arr[mid+1..end]<br>
void merge(int array[], int const left, int const mid, int const right)<br>
{<br>
	auto const subArrayOne = mid - left + 1;<br>
	auto const subArrayTwo = right - mid;<br>
<br>
	// Create temp arrays<br>
	auto *leftArray = new int[subArrayOne],<br>
		*rightArray = new int[subArrayTwo];<br>
<br>
	// Copy data to temp arrays leftArray[] and rightArray[]<br>
	for (auto i = 0; i < subArrayOne; i++)<br>
		leftArray[i] = array[left + i];<br>
	for (auto j = 0; j < subArrayTwo; j++)<br>
		rightArray[j] = array[mid + 1 + j];<br>
<br>
	auto indexOfSubArrayOne = 0, // Initial index of first sub-array<br>
		indexOfSubArrayTwo = 0; // Initial index of second sub-array<br>
	int indexOfMergedArray = left; // Initial index of merged array<br>
<br>
	// Merge the temp arrays back into array[left..right]<br>
	while (indexOfSubArrayOne < subArrayOne && indexOfSubArrayTwo < subArrayTwo) {<br>
		if (leftArray[indexOfSubArrayOne] <= rightArray[indexOfSubArrayTwo]) {<br>
			array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];<br>
			indexOfSubArrayOne++;<br>
		}<br>
		else {<br>
			array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];<br>
			indexOfSubArrayTwo++;<br>
		}<br>
		indexOfMergedArray++;<br>
	}<br>
	// Copy the remaining elements of<br>
	// left[], if there are any<br>
	while (indexOfSubArrayOne < subArrayOne) {<br>
		array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];<br>
		indexOfSubArrayOne++;<br>
		indexOfMergedArray++;<br>
	}<br>
	// Copy the remaining elements of<br>
	// right[], if there are any<br>
	while (indexOfSubArrayTwo < subArrayTwo) {<br>
		array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];<br>
		indexOfSubArrayTwo++;<br>
		indexOfMergedArray++;<br>
	}<br>
}<br>
<br>
// begin is for left index and end is<br>
// right index of the sub-array<br>
// of arr to be sorted */<br>
void mergeSort(int array[], int const begin, int const end)<br>
{<br>
	if (begin >= end)<br>
		return; // Returns recursively<br>
<br>
	auto mid = begin + (end - begin) / 2;<br>
	mergeSort(array, begin, mid);<br>
	mergeSort(array, mid + 1, end);<br>
	merge(array, begin, mid, end);<br>
}<br>
<br>
// UTILITY FUNCTIONS<br>
// Function to print an array<br>
void printArray(int A[], int size)<br>
{<br>
	for (auto i = 0; i < size; i++)<br>
		cout << A[i] << " ";<br>
}<br>
<br>
// Driver code<br>
int main()<br>
{<br>
	int arr[] = { 12, 11, 13, 5, 6, 7 };<br>
	auto arr_size = sizeof(arr) / sizeof(arr[0]);<br>
<br>
	cout << "Given array is \n";<br>
	printArray(arr, arr_size);<br>
<br>
	mergeSort(arr, 0, arr_size - 1);<br>
<br>
	cout << "\nSorted array is \n";<br>
	printArray(arr, arr_size);<br>
	return 0;<br>
}<br>
`

    document.getElementById("nav-video").addEventListener("click", ()=>{
        document.getElementById("video").scrollIntoView();
        window.scrollBy(0, -120)
    })

    document.getElementById("nav-intro").addEventListener("click", ()=>{
        document.getElementById("introduction").scrollIntoView();
        window.scrollBy(0, -120)
    })

    document.getElementById("nav-implementation").addEventListener("click", ()=>{
        document.getElementById("implementation").scrollIntoView();
        window.scrollBy(0, -120)
    })

    document.getElementById("nav-complexity").addEventListener("click", ()=>{
        document.getElementById("complexity").scrollIntoView();
        window.scrollBy(0, -120)
    })

    document.getElementById("nav-drawbacks").addEventListener("click", ()=>{
        document.getElementById("drawbacks").scrollIntoView();
        window.scrollBy(0, -120)
    })
    


    function windowScroll(){ 
  // Distance from top of document to top of footer.
  topOfFooter = myFoot.offsetTop - 200;
  // Distance user has scrolled from top, adjusted to take in height of sidebar (570 pixels inc. padding).
  scrollDistanceFromTopOfDoc = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) + window.innerHeight - myNav.clientHeight;
  // Difference between the two.
  scrollDistanceFromTopOfFooter = scrollDistanceFromTopOfDoc - topOfFooter;

  console.log(scrollDistanceFromTopOfDoc, scrollDistanceFromTopOfFooter)

  // If user has scrolled further than footer,
  // pull sidebar up using a negative margin.
  if (scrollDistanceFromTopOfDoc > topOfFooter) {
      myNav.style.marginTop = (0 - scrollDistanceFromTopOfFooter) + "px";
    // $('#cart').css('margin-top',  0 - scrollDistanceFromTopOfFooter);
  } else  {
      myNav.style.marginTop = 0;
    // $('#cart').css('margin-top', 0);
  }
};

    document.addEventListener("scroll", windowScroll)

  }

})(window, document, undefined);
