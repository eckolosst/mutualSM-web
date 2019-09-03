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
        fechaNac: '12/20/2018',
        domicilio: '95 Continental Way',
        email: 'besp0@buzzfeed.com',
        nSocio: '56399',
        inicioPeriodo: '10/4/2018',
        finPeriodo: '10/20/2018'
      },
      {
        dni: '90.621.035',
        nombre: 'Marissa',
        apellido: 'Rubinsztein',
        fechaNac: '11/13/2018',
        domicilio: '4 Lakewood Gardens Crossing',
        email: 'mrubinsztein1@webmd.com',
        nSocio: '58702',
        inicioPeriodo: '11/15/2018',
        finPeriodo: '3/21/2019'
      },
      {
        dni: '91.843.346',
        nombre: 'Solomon',
        apellido: 'Deare',
        fechaNac: '9/10/2018',
        domicilio: '8 Arkansas Plaza',
        email: 'sdeare2@netlog.com',
        nSocio: '53360',
        inicioPeriodo: '4/30/2019',
        finPeriodo: '5/22/2019'
      },
      {
        dni: '24.024.416',
        nombre: 'Mallissa',
        apellido: 'Jaksic',
        fechaNac: '6/30/2019',
        domicilio: '9358 Bellgrove Parkway',
        email: 'mjaksic3@php.net',
        nSocio: '96253',
        inicioPeriodo: '9/13/2018',
        finPeriodo: '3/21/2019'
      },
      {
        dni: '25.017.684',
        nombre: 'Kiley',
        apellido: 'Canham',
        fechaNac: '5/6/2019',
        domicilio: '7824 Bonner Alley',
        email: 'kcanham4@mlb.com',
        nSocio: '94520',
        inicioPeriodo: '7/24/2019',
        finPeriodo: '1/25/2019'
      },
      {
        dni: '88.845.538',
        nombre: 'Kassandra',
        apellido: 'Etter',
        fechaNac: '8/7/2019',
        domicilio: '7 Talmadge Terrace',
        email: 'ketter5@51.la',
        nSocio: '01873',
        inicioPeriodo: '10/2/2018',
        finPeriodo: '11/16/2018'
      },
      {
        dni: '30.691.921',
        nombre: 'Cello',
        apellido: 'Studdeard',
        fechaNac: '3/13/2019',
        domicilio: '769 Londonderry Plaza',
        email: 'cstuddeard6@vimeo.com',
        nSocio: '97902',
        inicioPeriodo: '6/19/2019',
        finPeriodo: '9/19/2018'
      },
      {
        dni: '90.398.823',
        nombre: 'Brook',
        apellido: 'Rubinowitz',
        fechaNac: '1/16/2019',
        domicilio: '9724 Grim Plaza',
        email: 'brubinowitz7@ycombinator.com',
        nSocio: '92246',
        inicioPeriodo: '3/27/2019',
        finPeriodo: '1/12/2019'
      },
      {
        dni: '78.338.922',
        nombre: 'Dallis',
        apellido: 'Cordes',
        fechaNac: '4/7/2019',
        domicilio: '005 Thierer Plaza',
        email: 'dcordes8@redcross.org',
        nSocio: '78941',
        inicioPeriodo: '4/16/2019',
        finPeriodo: '3/20/2019'
      },
      {
        dni: '06.561.310',
        nombre: 'Melloney',
        apellido: 'Lyes',
        fechaNac: '12/21/2018',
        domicilio: '87245 Iowa Street',
        email: 'mlyes9@blogger.com',
        nSocio: '03021',
        inicioPeriodo: '7/24/2019',
        finPeriodo: '5/10/2019'
      },
      {
        dni: '55.571.854',
        nombre: 'Henri',
        apellido: 'Laidler',
        fechaNac: '8/17/2019',
        domicilio: '16285 Express Alley',
        email: 'hlaidlera@fema.gov',
        nSocio: '58654',
        inicioPeriodo: '6/27/2019',
        finPeriodo: '6/17/2019'
      },
      {
        dni: '20.315.642',
        nombre: 'Yorker',
        apellido: 'Bradshaw',
        fechaNac: '9/19/2018',
        domicilio: '006 Hauk Hill',
        email: 'ybradshawb@admin.ch',
        nSocio: '87070',
        inicioPeriodo: '7/23/2019',
        finPeriodo: '6/26/2019'
      },
      {
        dni: '11.030.266',
        nombre: 'Annis',
        apellido: 'Jakoviljevic',
        fechaNac: '7/4/2019',
        domicilio: '34 Mitchell Crossing',
        email: 'ajakoviljevicc@istockphoto.com',
        nSocio: '33113',
        inicioPeriodo: '4/26/2019',
        finPeriodo: '12/11/2018'
      },
      {
        dni: '05.863.424',
        nombre: 'Giorgio',
        apellido: 'Manuelli',
        fechaNac: '8/26/2019',
        domicilio: '93521 Florence Street',
        email: 'gmanuellid@nih.gov',
        nSocio: '50310',
        inicioPeriodo: '12/22/2018',
        finPeriodo: '2/28/2019'
      },
      {
        dni: '87.146.676',
        nombre: 'Norbert',
        apellido: 'Hanbury',
        fechaNac: '11/8/2018',
        domicilio: '56012 Rockefeller Crossing',
        email: 'nhanburye@noaa.gov',
        nSocio: '54612',
        inicioPeriodo: '3/24/2019',
        finPeriodo: '12/14/2018'
      },
      {
        dni: '14.769.738',
        nombre: 'Tanhya',
        apellido: 'Bonehill',
        fechaNac: '3/7/2019',
        domicilio: '663 Evergreen Pass',
        email: 'tbonehillf@paginegialle.it',
        nSocio: '68196',
        inicioPeriodo: '9/19/2018',
        finPeriodo: '1/31/2019'
      },
      {
        dni: '37.534.916',
        nombre: 'Algernon',
        apellido: 'Cochet',
        fechaNac: '12/6/2018',
        domicilio: '6887 Katie Way',
        email: 'acochetg@freewebs.com',
        nSocio: '40411',
        inicioPeriodo: '11/9/2018',
        finPeriodo: '9/3/2018'
      },
      {
        dni: '27.859.832',
        nombre: 'Trudey',
        apellido: 'McTerry',
        fechaNac: '3/15/2019',
        domicilio: '79 Hoffman Trail',
        email: 'tmcterryh@wsj.com',
        nSocio: '07858',
        inicioPeriodo: '11/8/2018',
        finPeriodo: '10/3/2018'
      },
      {
        dni: '22.281.374',
        nombre: 'Obidiah',
        apellido: 'De Blase',
        fechaNac: '2/22/2019',
        domicilio: '1 Fieldstone Parkway',
        email: 'odeblasei@yellowpages.com',
        nSocio: '23489',
        inicioPeriodo: '8/1/2019',
        finPeriodo: '3/5/2019'
      },
      {
        dni: '30.474.865',
        nombre: 'Sheeree',
        apellido: 'Toseland',
        fechaNac: '10/27/2018',
        domicilio: '06918 Kinsman Street',
        email: 'stoselandj@dropbox.com',
        nSocio: '87535',
        inicioPeriodo: '2/3/2019',
        finPeriodo: '3/28/2019'
      }
    ];
  }
}
