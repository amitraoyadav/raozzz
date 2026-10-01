import React from 'react';
import {
  Building2,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { RealEstateProject } from '../../data/squareYardDealersData';

interface ProjectCardProps {
  project: RealEstateProject;
  onViewProject: (project: RealEstateProject) => void;
}

export const SquareYardDealersProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onViewProject
}) => {
  return (
    <article className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        {/* Project Banner Image */}
        <div
          className="relative h-60 bg-slate-900 overflow-hidden cursor-pointer"
          onClick={() => onViewProject(project)}
        >
          <img
            src={project.bannerImage}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-xs shadow-sm ${
                project.status === 'New Launch'
                  ? 'bg-amber-400 text-slate-950'
                  : project.status === 'Ready to Move'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-600 text-white'
              }`}>
                {project.status}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-900/80 text-white font-bold text-[10px] uppercase tracking-wider backdrop-blur-xs">
                {project.category}
              </span>
            </div>

            {project.reraId && (
              <span className="px-2 py-0.5 rounded-md bg-slate-900/80 text-slate-200 font-mono text-[9px] backdrop-blur-xs">
                RERA
              </span>
            )}
          </div>

          {/* Bottom Gradient Overlay: Price Range */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-4 text-white">
            <span className="text-[10px] text-slate-300 uppercase tracking-wider block font-semibold">
              Price Range
            </span>
            <strong className="text-xl font-black text-amber-300 tracking-tight">
              {project.priceRange}
            </strong>
          </div>
        </div>

        {/* Project Card Content */}
        <div className="p-5 space-y-3">
          <div>
            <div className="flex items-center justify-between gap-2">
              <h3
                onClick={() => onViewProject(project)}
                className="font-black text-lg text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors cursor-pointer"
                title={project.name}
              >
                {project.name}
              </h3>
            </div>
            <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mt-0.5">
              By {project.developer}
            </p>
            <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="line-clamp-1">{project.locationDetails}</span>
            </p>
          </div>

          {/* Configurations & Specs */}
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
            <div className="flex items-center justify-between text-slate-700">
              <span className="text-slate-500">Configurations:</span>
              <strong className="font-bold text-slate-900">
                {project.configurations.join(', ')}
              </strong>
            </div>
            <div className="flex items-center justify-between text-slate-700">
              <span className="text-slate-500">Sizes:</span>
              <span>{project.areaRange}</span>
            </div>
            <div className="flex items-center justify-between text-slate-700">
              <span className="text-slate-500">Possession:</span>
              <span className="font-medium text-emerald-700">{project.possessionDate}</span>
            </div>
          </div>

          {/* Amenities tags */}
          <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-slate-600">
            {project.amenities.slice(0, 3).map((a, i) => (
              <span key={i} className="px-2 py-0.5 rounded-md bg-slate-100">
                {a}
              </span>
            ))}
            {project.amenities.length > 3 && (
              <span className="text-[10px] text-slate-400 font-medium">
                +{project.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: CTA */}
      <div className="p-5 pt-0">
        <button
          type="button"
          onClick={() => onViewProject(project)}
          className="w-full py-2.5 px-4 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <span>View Project Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
