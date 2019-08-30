import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Patdetails } from './patdetails';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  details:FormGroup;
  callerdetails:FormGroup;
  general: FormGroup;
  address: FormGroup;
  contact: FormGroup;
  other: FormGroup;

  isActive:Boolean=false;

  closeResult: string;
  constructor(private modalService: NgbModal, private fb: FormBuilder) { }

  fisrtname:string='';
  lastname:string='';
  phone:string='';
  email:string='';
  arr:Patdetails[]=[
    new Patdetails('ak','zz','12365','sdgvdv'),
    new Patdetails('ak','zz','12365','sdgvdv'),
    new Patdetails('aks','zz','12365','sdgvdv'),
    new Patdetails('ak','zz','12365','sdgvdv'),
    new Patdetails('bs','zz','12365','sdgvdv'),
    new Patdetails('nm','zz','12365','sdgvdv'),
    new Patdetails('re','zz','12365','sdgvdv'),
    new Patdetails('yt','zz','12365','sdgvdv'),
    new Patdetails('jh','zz','12365','sdgvdv')
  ];

  ngOnInit() {

    this.details=this.fb.group({
      patientname:new FormControl(null),
      patientDOB:new FormControl(null),
      phone:new FormControl(null),
      email:new FormControl(null)
    });

    this.callerdetails=this.fb.group({
      callername:new FormControl(null),
      phoneno:new FormControl(null)
    });

    this.general=this.fb.group({
      firstname:new FormControl(null),
      middlename:new FormControl(null),
      lastname:new FormControl(null),
      dob:new FormControl(null),
      gender: new FormControl(null)
    });

    this.address=this.fb.group({
      address1:new FormControl(null),
      address2:new FormControl(null),
      zip:new FormControl(null),
      city:new FormControl(null),
      state:new FormControl(null)
    });

    this.contact=this.fb.group({
      home:new FormControl(null),
      cell:new FormControl(null),
      workphone:new FormControl(null),
      email:new FormControl(null),
      mode:new FormControl(null)
    });

    this.other=this.fb.group({
      ssn:new FormControl(null),
      language:new FormControl(null)
    });

  }

  openEdit(content, i) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openDisplay(content1, i) {
    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onCheck()
  {
    this.isActive=true;
  }

  }


