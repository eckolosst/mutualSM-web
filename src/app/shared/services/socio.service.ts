import { Injectable } from '@angular/core';
import { Socio } from '../models/socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  constructor() {}

  getSocios() {
    return [
      {
        dni: '43.053.460',
        nombre: 'Brade',
        apellido: 'Esp',
        fechaNacimiento: '12/20/2018',
        domicilio: '95 Continental Way',
        email: 'besp0@buzzfeed.com',
        telefono: '56399'
      },
      {
        dni: '90.621.035',
        nombre: 'Marissa',
        apellido: 'Rubinsztein',
        fechaNacimiento: '11/13/2018',
        domicilio: '4 Lakewood Gardens Crossing',
        email: 'mrubinsztein1@webmd.com',
        telefono: '58702'
      },
      {
        dni: '91.843.346',
        nombre: 'Solomon',
        apellido: 'Deare',
        fechaNacimiento: '9/10/2018',
        domicilio: '8 Arkansas Plaza',
        email: 'sdeare2@netlog.com',
        telefono: '53360'
      },
      {
        dni: '24.024.416',
        nombre: 'Mallissa',
        apellido: 'Jaksic',
        fechaNacimiento: '6/30/2019',
        domicilio: '9358 Bellgrove Parkway',
        email: 'mjaksic3@php.net',
        telefono: '96253'
      },
      {
        dni: '25.017.684',
        nombre: 'Kiley',
        apellido: 'Canham',
        fechaNacimiento: '5/6/2019',
        domicilio: '7824 Bonner Alley',
        email: 'kcanham4@mlb.com',
        telefono: '94520'
      },
      {
        dni: '88.845.538',
        nombre: 'Kassandra',
        apellido: 'Etter',
        fechaNacimiento: '8/7/2019',
        domicilio: '7 Talmadge Terrace',
        email: 'ketter5@51.la',
        telefono: '01873'
      },
      {
        dni: '30.691.921',
        nombre: 'Cello',
        apellido: 'Studdeard',
        fechaNacimiento: '3/13/2019',
        domicilio: '769 Londonderry Plaza',
        email: 'cstuddeard6@vimeo.com',
        telefono: '97902'
      },
      {
        dni: '90.398.823',
        nombre: 'Brook',
        apellido: 'Rubinowitz',
        fechaNacimiento: '1/16/2019',
        domicilio: '9724 Grim Plaza',
        email: 'brubinowitz7@ycombinator.com',
        telefono: '92246'
      },
      {
        dni: '78.338.922',
        nombre: 'Dallis',
        apellido: 'Cordes',
        fechaNacimiento: '4/7/2019',
        domicilio: '005 Thierer Plaza',
        email: 'dcordes8@redcross.org',
        telefono: '78941'
      },
      {
        dni: '06.561.310',
        nombre: 'Melloney',
        apellido: 'Lyes',
        fechaNacimiento: '12/21/2018',
        domicilio: '87245 Iowa Street',
        email: 'mlyes9@blogger.com',
        telefono: '03021'
      },
      {
        dni: '55.571.854',
        nombre: 'Henri',
        apellido: 'Laidler',
        fechaNacimiento: '8/17/2019',
        domicilio: '16285 Express Alley',
        email: 'hlaidlera@fema.gov',
        telefono: '58654'
      },
      {
        dni: '20.315.642',
        nombre: 'Yorker',
        apellido: 'Bradshaw',
        fechaNacimiento: '9/19/2018',
        domicilio: '006 Hauk Hill',
        email: 'ybradshawb@admin.ch',
        telefono: '87070'
      },
      {
        dni: '11.030.266',
        nombre: 'Annis',
        apellido: 'Jakoviljevic',
        fechaNacimiento: '7/4/2019',
        domicilio: '34 Mitchell Crossing',
        email: 'ajakoviljevicc@istockphoto.com',
        telefono: '33113'
      },
      {
        dni: '05.863.424',
        nombre: 'Giorgio',
        apellido: 'Manuelli',
        fechaNacimiento: '8/26/2019',
        domicilio: '93521 Florence Street',
        email: 'gmanuellid@nih.gov',
        telefono: '50310'
      },
      {
        dni: '87.146.676',
        nombre: 'Norbert',
        apellido: 'Hanbury',
        fechaNacimiento: '11/8/2018',
        domicilio: '56012 Rockefeller Crossing',
        email: 'nhanburye@noaa.gov',
        telefono: '54612'
      },
      {
        dni: '14.769.738',
        nombre: 'Tanhya',
        apellido: 'Bonehill',
        fechaNacimiento: '3/7/2019',
        domicilio: '663 Evergreen Pass',
        email: 'tbonehillf@paginegialle.it',
        telefono: '68196'
      },
      {
        dni: '37.534.916',
        nombre: 'Algernon',
        apellido: 'Cochet',
        fechaNacimiento: '12/6/2018',
        domicilio: '6887 Katie Way',
        email: 'acochetg@freewebs.com',
        telefono: '40411'
      },
      {
        dni: '27.859.832',
        nombre: 'Trudey',
        apellido: 'McTerry',
        fechaNacimiento: '3/15/2019',
        domicilio: '79 Hoffman Trail',
        email: 'tmcterryh@wsj.com',
        telefono: '07858'
      },
      {
        dni: '22.281.374',
        nombre: 'Obidiah',
        apellido: 'De Blase',
        fechaNacimiento: '2/22/2019',
        domicilio: '1 Fieldstone Parkway',
        email: 'odeblasei@yellowpages.com',
        telefono: '23489'
      },
      {
        dni: '30.474.865',
        nombre: 'Sheeree',
        apellido: 'Toseland',
        fechaNacimiento: '10/27/2018',
        domicilio: '06918 Kinsman Street',
        email: 'stoselandj@dropbox.com',
        telefono: '87535'
      }
    ];
  }
}
