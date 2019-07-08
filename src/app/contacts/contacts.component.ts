import { Component, OnInit } from '@angular/core';
import { Contacts } from '../models/contacts';

import { ContactsService } from '../services/contacts.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  contacts: Contacts[]; 
  dataService: ContactsService;

  constructor(private ContactsService: ContactsService) {
    this.dataService = ContactsService;
}

ngOnInit() {
    this.contacts = this.dataService.contacts;
}

}
