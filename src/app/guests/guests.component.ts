import { Component, EventEmitter, Output } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { NgFor } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-guests',
  standalone: true,
  imports: [MatButtonModule ,NgFor,MatGridListModule],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.css'
})
export class GuestsComponent {
  @Output() dataEvent = new EventEmitter<string>();
  @Output() bioClicked = new EventEmitter<{ src: string; name: string }>();

  

  sendBio(data : any ) {
    this.dataEvent.emit(data);
  }


guests=[
{src:"draoui.jpeg",name:"Pr Draoui Belkacem ", bio:"Prof. Draoui Belkacem is Professor of engineering Sciences in the Mechanical Engineering Department of Tahri Mohamed Bechar University since 1996. Keynote: Thermal and Building Physics improve the energy efficiency of thermal comfort. Control and management of the micoclimate in greenhouses. Solar Energy Professor DRAOUI Belkacem in currently working as a professor in the mechanical engineering sector within the faculty of Technology at Tahri Mohamed Bechar University, Algeria. He obtained his doctorate in Engineering Sciences. Option: Energetics from the University of Nice Sohia Antipolis, French in 1994. Pr DRAOUI Belkacem is the author of more than 212 peer-reviewed papers, including 148 papers of quality journals, 04 peer-reviewed books chapters and four books. His articles have attracted more than 2574 citations with an h-index of 24. In addition to teaching and supervising engineers, Magisters, Masters and Doctoral students, Pr DRAOUI Belkacem supervised 25 doctoral students until the end and supervises currently 04 doctoral students. Since March 2022 to present day: Member of the National Council for Scientific Research and Technologies. From 2016 to March 2022: Vice Rector in charge of Development, Prospective and Orientation. From 2009 to 2014: Vice Dean in charge of Post-graduation and Scientific research. 2011 to 2017: Director of a Research Laboratory (Energetic in Arid Zones) bringing together 6 teams where I managed a substantial capital between equipment and operation. I have held several responsibilities, namely quality assurance, national commission for the equivalence of diplomas, expertise in research projects and member of the Scientific Council several times a member of the scientific councils."},
{src:"amor.jpg",name:" Pr Amor Bouhdjar" , bio:"Prof. Amor Bouhdjar is a PhD (Doctorat d'Etat ) holder in thermal physics and Research Director (Directeur de Recherche) in Renewable Energies. For almost forty years, he has been studying fluid flow and heat transfer phenomena and working on solar thermal energy conversion systems. This has led to more than fifty publications. Meanwhile he has had several academic activities in teaching and supervising several doctoral theses and Magister and masters dissertations. Due to his expertise in renewable energies, he has been called upon to participate in the building of several research programs frameworks in renewable energies and in the setup of several research projects. He has participated in various forums, meetings and commissions at the national and international levels on renewable energies. He has been member of several scientific bodies in different institutions. Member of the expert panel for the Renewable Energy program at The DGRSDT. Ministry of Higher education and scientific research Algeria. 2009 . Member and Secretary of the Think-tank Group on Renewable energy. Ministry of Higher education and scientific research Algeria. Oct 2001-Mars 2002. Member of the expert panel for the Renewable Energy program at The Ministry of Higher education and scientific research Algeria. 1998. President of the Coordination committee on research activities on renewable energies. Ministry of Higher education and scientific research Algeria. Fev. 1997. President of subcommittee on Renewable Energy. Inter-ministerial Commission on New energies . Member of the North African (Maghreban) commission on Renewable energy. Lately, he was elected as Vice President of the National Council for Scientific Research and technologies for the period of 2022 and 2023."} 
]
}



// {src:"chitour.jpg",name:"Pr Chems-Eddine Chitour" , bio:"Prof. Chems-Eddine Chitour is an Algerian scholar, researcher and author. He took office as Minister of Energy Transition and Renewable Energies on June 24, 2020. He previously served as minister of Higher Education and Scientific Research from January the 4th to June 24, 2020 in Algeria.CareerHe graduated from the National Polytechnic School and the Algerian Institute of petroleum in Algiers, in the field of Chemistry. He did his doctorate Es Sciences at the Université Jean Monnet in France. He is the founder of valorization of fossil energy research laboratory. He worked as a professor and assisting professor at IGC and then ENSIACET[clarification needed] in the city of Toulouse in France. He published several scholarly articles and books.Chitour took office on 4 January 2020 as Minister of Higher Education and Scientific Research."} ,