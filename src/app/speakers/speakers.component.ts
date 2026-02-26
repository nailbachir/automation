import { Component, EventEmitter, Output } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { NgFor } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [MatButtonModule ,NgFor,MatGridListModule],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent {
  @Output() dataEvent = new EventEmitter<string>();
  @Output() bioClicked = new EventEmitter<{ src: string; name: string }>();

  

  sendBio(data : any ) {
    this.dataEvent.emit(data);
  }


speakers=[

{src:"mamar.png",name:"Pr Maamar Bettayeb" , bio:"Prof. Maamar Bettayeb (born 7 June 1953) is an Algerian control theorist, educator and inventor. He is the author of publications on understanding the singular value decomposition and model order reduction. Bettayeb is also a promoter of scientific research. Early years Bettayeb continued his elementary and middle studies in Beni Amrane before joining the polyvalent high school of Tizi Ouzou in 1969 to follow his secondary studies in the Mathematics sector. After obtaining his baccalaureate in 1972 with a first class honors, he obtained a scholarship from the Algerian state to continue his university studies in the United States at the University of Southern California in Los Angeles. He obtained his bachelor's degree in automatic control in 1976, then his master's degree in 1978. Bettayeb obtained his PhD degree in 1981 following his defense of his thesis at the University of Southern California in the Department of Electrical Engineering, and whose title was Approximation of Linear Systems: New Approaches Based on Singular Value Decomposition, under the supervision of Professor Emeritus Leonard M. Silverman."},
{src:"mraoui.png",name:"Dr M’RAOUI Abdelhamid" , bio:" Dr M’RAOUI Abdelhamid est chercheur senior au centre de développement des énergies renouvelables depuis 2002. Il est titulaire d’un doctorat en physique énergétique. Il a une expertise dans plusieurs domaines, notamment l’énergie solaire, la production d’hydrogène, et les systèmes photovoltaïques. Il a occupé divers postes de responsabilité dont chef de division bioénergie et environnement et chef d’équipe engineering des systèmes énergétiques d’hydrogène. Actuellement il est le directeur de la division hydrogène. Il a publié de nombreux articles de recherche dans le domaine des énergies renouvelables. Ses recherches actuelles portent sur l’optimisation de la production d'hydrogène à partir de sources renouvelables basés sur le coût du produit, et l’étude des systèmes Power-to-X utilisant l’hydrogène vert."},
{src:"hasnaoui.png",name:" Pr Hasnaoui Othman" , bio:"Prof. Hasnaoui Othman is a Senior Lecturer of Ecole Supérieure des Sciences et Techniques de Tunis."} , 

]
}



// {src:"chitour.jpg",name:"Pr Chems-Eddine Chitour" , bio:"Prof. Chems-Eddine Chitour is an Algerian scholar, researcher and author. He took office as Minister of Energy Transition and Renewable Energies on June 24, 2020. He previously served as minister of Higher Education and Scientific Research from January the 4th to June 24, 2020 in Algeria.CareerHe graduated from the National Polytechnic School and the Algerian Institute of petroleum in Algiers, in the field of Chemistry. He did his doctorate Es Sciences at the Université Jean Monnet in France. He is the founder of valorization of fossil energy research laboratory. He worked as a professor and assisting professor at IGC and then ENSIACET[clarification needed] in the city of Toulouse in France. He published several scholarly articles and books.Chitour took office on 4 January 2020 as Minister of Higher Education and Scientific Research."} ,