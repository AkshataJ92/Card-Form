import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Patdetails } from './patdetails';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  details: FormGroup;
  callerdetails: FormGroup;
  general: FormGroup;
  address: FormGroup;
  contact: FormGroup;
  other: FormGroup;
  isActive: Boolean = false;
  closeResult: string;
  control = new FormControl();
  relations: string[] = ['Child', 'Parent', 'Self', 'Spouse','Aunt','Cousin','Former Spouse','Grandchild','Inlaw','Niece/Nephew'];
  filteredRelation: Observable<string[]>;

  constructor(private modalService: NgbModal, private fb: FormBuilder) { }

  patname: string = '';
  fisrtname: string = '';
  lastname: string = '';
  phone: string = '';
  email: string = '';
  arr: Patdetails[] = [
    new Patdetails('bs', 'zz', '12365', 'sdgvdv'),
    new Patdetails('ak', 'zz', '12365', 'sdgvdv'),
    new Patdetails('ak', 'zz', '12365', 'sdgvdv'),
    new Patdetails('ak', 'zz', '12365', 'sdgvdv'),
    new Patdetails('bs', 'zz', '12365', 'sdgvdv'),
    new Patdetails('nm', 'zz', '12365', 'sdgvdv'),
    new Patdetails('re', 'zz', '12365', 'sdgvdv'),
    new Patdetails('yt', 'zz', '12365', 'sdgvdv'),
    new Patdetails('jh', 'zz', '12365', 'sdgvdv')
  ];

  ngOnInit() {

    this.details=this.fb.group({
      patientname:new FormControl(null,Validators.required),
      patientDOB:new FormControl(null),
      phone:new FormControl('',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)]),
      email:new FormControl(null,[Validators.required,Validators.email])
    });

    this.callerdetails=this.fb.group({
      callername:new FormControl(null,Validators.required),
      phoneno:new FormControl('',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),Validators.required])
    });

    this.general=this.fb.group({
      firstname:new FormControl(null,Validators.required),
      middlename:new FormControl(null),
      lastname:new FormControl(null,Validators.required),
      dob:new FormControl(null),
      gender: new FormControl(null,Validators.required)
    });

    this.address = this.fb.group({
      address1: new FormControl(null),
      address2: new FormControl(null),
      zip: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null)
    });

    this.contact=this.fb.group({
      home:new FormControl('',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)]),
      cell:new FormControl('',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)]),
      workphone:new FormControl('',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      mode:new FormControl(null)
    });

    this.other = this.fb.group({
      ssn: new FormControl(null),
      language: new FormControl(null)
    });

    this.filteredRelation = this.control.valueChanges.pipe(
      startWith(''),
  map(value => this._filter(value))
    );

  }

  openform(reg, content1, i) {

    let pn = this.details.get('patientname').value;
    console.log(pn);

    for (let i = 0; i < this.arr.length; i--) {
      let pname = this.arr[i].patname;
      console.log(this.arr.length);
      console.log(pname);
      if (pname === pn) {
        console.log('pname');
        this.modalService.open(content1, { size: 'xl' });

      }
      //  if(this.details.value.patientname.value === this.patname){
      //     console.log('pname');
      //     this.modalService.open(content1, { size: 'xl' });
      //          }
      else {
        console.log(pn);

        this.general.patchValue({
          firstname: this.details.value.patientname
        });

        this.modalService.open(reg, { size: 'xl' });
      }
    }
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.relations.filter(relation => this._normalizeValue(relation).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  checked:boolean = false;

  addprop1(e){
    if(e.target.checked){
      this.checked = true;
    }else{
      this.checked = false;
    }
  }

}


