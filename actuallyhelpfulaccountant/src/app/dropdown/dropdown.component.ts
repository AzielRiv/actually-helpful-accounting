import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: false
  // standalone: false, // not needed unless you use standalone components
})
export class DropdownComponent implements OnInit {
  dDContent = [
    { title: 'Q: What makes you different from other CPA firms?', subtitle: 'Answer', body: 'We’re actually helpful. That means clear communication, real support, and answers when you need them — not just during tax season. We don’t do one-off transactions. We build relationships.', code: 'Q1', active: false},
    { title: 'Q: How much do your services cost?', subtitle: 'Answer ', body: ' We offer flat-rate monthly pricing STARTING AT $200/MONTH, so there are no surprise bills or hourly charges. Our most popular package includes bookkeeping, tax prep, and strategic planning. Want a custom quote? send me a message!', code: 'Q2', active: false},
    { title: 'Q: Do you work with individuals or just businesses?', subtitle: 'Answer', body: 'Both! Most of our clients are business owners or real estate investors, but we also prepare personal tax returns — especially when they’re connected to a business or strategic plan.', code: 'Q3', active: false },
    { title: 'Q: What does your process look like?', subtitle: 'Answer', body: 'We start with a free discovery call to make sure we’re a good fit. From there, we onboard you into our client portal, connect your systems, and schedule a kickoff call to walk through everything together.', code: 'Q3', active: false },
    { title: 'Q: Do I need to be local to work with you?', subtitle: 'Answer', body: 'Nope! We’re a fully remote firm and work with clients across the U.S. All of our meetings are done via Zoom, and we use secure digital tools to make everything smooth and stress-free.', code: 'Q3', active: false },
    { title: 'Q: Can you clean up my books or help if I’m behind on my taxes?', subtitle: 'Answer', body: 'Absolutely. No shame here — we specialize in cleanup projects. Whether it’s a few months or a few years, we’ll get you caught up and back on track.', code: 'Q3', active: false },
    { title: 'Q: Do you do payroll, sales tax, or 1099s?', subtitle: 'Answer', body: 'We offer those as add-on services for our monthly clients. If you need a full-service accounting partner, we got you covered', code: 'Q3', active: false },
    { title: 'Q: What if I’m super behind and kind of embarrassed?', subtitle: 'Answer', body: 'We get it. And honestly? You’re exactly the kind of person we built this firm for. There’s no shame here-just solutions.', code: 'Q3', active: false },
    { title: 'Q: Will you judge me if my receipts are in a shoebox?', subtitle: 'Answer', body: 'A: Never. Shoebox, glovebox, Dropbox — we’ve seen it all. No judgment here, just solutions.', code: 'Q3', active: false },
  ];

  dropDownActive: boolean = false;

  constructor() {}

  ngOnInit() {}

  // changeDropdownStatus() {
  //   this.dropDownActive = !this.dropDownActive;
  // }

    changeDropdownStatus(i: number) {
    this.dDContent[i].active = !this.dDContent[i].active;
  }
}






// import { Component } from '@angular/core';
// import { NgFor } from '@angular/common';
// import { OnInit } from '@angular/core';

// @Component({
//   selector: 'app-dropdown',
//     // imports: [NgFor],
//   templateUrl: './dropdown.component.html',
//   styleUrls: ['./dropdown.component.scss'],
//   standalone: false,
// })
// export class DropdownComponent  implements OnInit {

//   constructor() { }

//   ngOnInit() {}

// //     // Example array of options (can be any large dataset)
// //   items = [
// //     { id: 1, name: 'Answer1' },
// //     { id: 2, name: 'Answer2' },
// //     { id: 3, name: 'Answer3' },
// //     // ...add as many as needed
// //   ];

// // selectedItemId: number | null = null;

// // onSelect(event: Event) {
// //   const value = (event.target as HTMLSelectElement).value;
// //   this.selectedItemId = +value; // convert to number if needed
// // }

// // get selectedItem() {
// //   return this.items.find(item => item.id === this.selectedItemId);
// // }



//   dDContent = [
//     {
//       title: 'Question 1',
//       subtitle: 'Answer 1',
//       body: 'Answer Here'
//     },
//       {
//       title: 'Question 2',
//       subtitle: 'Answer 2',
//       body: 'Answer Here'
//     },
//         {
//       title: 'Question 3',
//       subtitle: 'Answer 3',
//       body: 'Answer Here'
//     },
//   ];


//   dropDownActive:boolean=false; 
//   changeDropdownStatus(){
//     this.dropDownActive=!this.dropDownActive;
//   }
// }