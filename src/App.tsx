import { useState, useEffect } from 'react';
import {
  BookOpen, Lock, Brain,
  Lightbulb, FlaskConical, Calculator, Users, Languages, TrendingUp,
  ChevronDown, FileText, Tag, CheckSquare, Square
} from 'lucide-react';
import { SABER11_DATA } from './data/saber11';
import type { Area, Competence, Affirmation } from './data/saber11';

const App = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [selectedCompetence, setSelectedCompetence] = useState<Competence | null>(null);
  const [selectedAffirmation, setSelectedAffirmation] = useState<Affirmation | null>(null);

  // Checked items for each column
  const [checkedCompetences, setCheckedCompetences] = useState<Record<string, boolean>>({});
  const [checkedAffirmations, setCheckedAffirmations] = useState<Record<string, boolean>>({});
  const [checkedEvidences, setCheckedEvidences] = useState<Record<string, boolean>>({});
  const [checkedTopics, setCheckedTopics] = useState<Record<string, boolean>>({});

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [showTip, setShowTip] = useState<string | null>(null);

  // Load/Save
  useEffect(() => {
    const saved = localStorage.getItem('saber11_state_v6');
    if (saved) {
      const state = JSON.parse(saved);
      setCheckedCompetences(state.comp || {});
      setCheckedAffirmations(state.aff || {});
      setCheckedEvidences(state.ev || {});
      setCheckedTopics(state.top || {});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('saber11_state_v6', JSON.stringify({
      comp: checkedCompetences,
      aff: checkedAffirmations,
      ev: checkedEvidences,
      top: checkedTopics
    }));
  }, [checkedCompetences, checkedAffirmations, checkedEvidences, checkedTopics]);

  // Handlers
  const handleAreaClick = (area: Area) => {
    setSelectedArea(selectedArea?.id === area.id ? null : area);
    if (selectedArea?.id !== area.id) {
      setSelectedCompetence(null);
      setSelectedAffirmation(null);
    }
  };

  const handleCompetenceClick = (comp: Competence) => {
    setSelectedCompetence(selectedCompetence?.id === comp.id ? null : comp);
    if (selectedCompetence?.id !== comp.id) {
      setSelectedAffirmation(null);
    }
  };

  const handleAffirmationClick = (aff: Affirmation) => {
    setSelectedAffirmation(selectedAffirmation?.id === aff.id ? null : aff);
  };

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getAreaIcon = (iconName: string) => {
    const icons: Record<string, React.FC<any>> = { FlaskConical, Calculator, Users, BookOpen, Languages };
    return icons[iconName] || BookOpen;
  };

  // Count checked items
  const countChecked = (items: string[], checked: Record<string, boolean>) => {
    return items.filter(id => checked[id]).length;
  };

  // Group topics by category
  const groupByCategory = (topics: any[]) => {
    const grouped: Record<string, any[]> = {};
    topics.forEach(t => {
      const cat = t.category || 'General';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(t);
    });
    return grouped;
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-brand">
          <div className="header-logo"><Brain size={22} /></div>
          <div>
            <div className="header-title">Ruta Saber 11°</div>
            <div className="header-subtitle">Explorador de Competencias ICFES</div>
          </div>
        </div>
        <div className="header-right">
          <div className="progress-badge">
            <TrendingUp size={16} style={{ color: '#6366f1' }} />
            <span className="progress-text">Progreso Global</span>
          </div>
          <div className="status-badge">
            <div className="status-dot" />
            <span className="status-text">Activo</span>
          </div>
        </div>
      </header>

      {/* Main Grid - 4 Columns as per illustration */}
      <main className="main">
        <div className="columns-grid">

          {/* COLUMN 1: COMPETENCIA */}
          <div className="column-panel">
            <div className="panel-header">
              <span className="panel-title">Competencia</span>
            </div>

            <div className="panel-content">
              {/* Area Selector */}
              <div className="area-tabs">
                {SABER11_DATA.map(area => {
                  const Icon = getAreaIcon(area.icon);
                  return (
                    <button
                      key={area.id}
                      className={`area-tab ${selectedArea?.id === area.id ? 'active' : ''}`}
                      onClick={() => handleAreaClick(area)}
                      style={{ '--tab-color': area.color } as React.CSSProperties}
                    >
                      <Icon size={14} />
                      <span>{area.name.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Competencies List */}
              <div className="items-list">
                {selectedArea ? (
                  selectedArea.competencies.map(comp => (
                    <div
                      key={comp.id}
                      className={`list-item ${selectedCompetence?.id === comp.id ? 'active' : ''} ${expandedItems[comp.id] ? 'expanded' : ''}`}
                    >
                      <div className="item-header" onClick={() => handleCompetenceClick(comp)}>
                        <button
                          className="item-checkbox"
                          onClick={(e) => { e.stopPropagation(); setCheckedCompetences(prev => ({ ...prev, [comp.id]: !prev[comp.id] })); }}
                        >
                          {checkedCompetences[comp.id] ? <CheckSquare size={16} className="checked" /> : <Square size={16} />}
                        </button>
                        <span className="item-text">{comp.name}</span>
                        <button className="item-expand" onClick={(e) => { e.stopPropagation(); toggleExpanded(comp.id); }}>
                          <ChevronDown size={14} className={expandedItems[comp.id] ? 'rotated' : ''} />
                        </button>
                      </div>
                      {expandedItems[comp.id] && (
                        <div className="item-details">
                          <p>{comp.description}</p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="empty-hint">
                    <Lock size={20} />
                    <span>Selecciona un área arriba</span>
                  </div>
                )}
              </div>
            </div>

            <div className="panel-footer">
              <span className="footer-label">Desplegable</span>
              <div className="footer-check">
                <CheckSquare size={14} className="check-icon" />
                <span>Listado Confirmación: {selectedArea ? countChecked(selectedArea.competencies.map(c => c.id), checkedCompetences) : 0}/{selectedArea?.competencies.length || 0}</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: AFIRMACIÓN */}
          <div className="column-panel">
            <div className="panel-header">
              <span className="panel-title">Afirmación</span>
            </div>

            <div className="panel-content">
              <div className="items-list">
                {selectedCompetence ? (
                  selectedCompetence.affirmations.map(aff => (
                    <div
                      key={aff.id}
                      className={`list-item ${selectedAffirmation?.id === aff.id ? 'active' : ''} ${expandedItems[aff.id] ? 'expanded' : ''}`}
                    >
                      <div className="item-header" onClick={() => handleAffirmationClick(aff)}>
                        <button
                          className="item-checkbox"
                          onClick={(e) => { e.stopPropagation(); setCheckedAffirmations(prev => ({ ...prev, [aff.id]: !prev[aff.id] })); }}
                        >
                          {checkedAffirmations[aff.id] ? <CheckSquare size={16} className="checked" /> : <Square size={16} />}
                        </button>
                        <span className="item-text">{aff.description}</span>
                        <button className="item-expand" onClick={(e) => { e.stopPropagation(); toggleExpanded(aff.id); }}>
                          <ChevronDown size={14} className={expandedItems[aff.id] ? 'rotated' : ''} />
                        </button>
                      </div>
                      {expandedItems[aff.id] && (
                        <div className="item-details">
                          <div className="detail-meta">
                            <FileText size={12} /> {aff.evidences.length} evidencias
                            <Tag size={12} style={{ marginLeft: 8 }} /> {aff.topics.length} temas
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="empty-hint">
                    <Lock size={20} />
                    <span>Selecciona una competencia</span>
                  </div>
                )}
              </div>
            </div>

            <div className="panel-footer">
              <span className="footer-label">Desplegable</span>
              <div className="footer-check">
                <CheckSquare size={14} className="check-icon" />
                <span>Listado Confirmación: {selectedCompetence ? countChecked(selectedCompetence.affirmations.map(a => a.id), checkedAffirmations) : 0}/{selectedCompetence?.affirmations.length || 0}</span>
              </div>
            </div>
          </div>

          {/* COLUMN 3: EVIDENCIA */}
          <div className="column-panel">
            <div className="panel-header">
              <span className="panel-title">Evidencia</span>
            </div>

            <div className="panel-content">
              <div className="items-list">
                {selectedAffirmation ? (
                  selectedAffirmation.evidences.map((ev, idx) => (
                    <div
                      key={ev.id}
                      className={`list-item ${checkedEvidences[ev.id] ? 'completed' : ''}`}
                    >
                      <div className="item-header">
                        <button
                          className="item-checkbox"
                          onClick={() => setCheckedEvidences(prev => ({ ...prev, [ev.id]: !prev[ev.id] }))}
                        >
                          {checkedEvidences[ev.id] ? <CheckSquare size={16} className="checked" /> : <Square size={16} />}
                        </button>
                        <span className="item-number">{idx + 1}</span>
                        <span className="item-text">{ev.description}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="empty-hint">
                    <Lock size={20} />
                    <span>Selecciona una afirmación</span>
                  </div>
                )}
              </div>
            </div>

            <div className="panel-footer">
              <span className="footer-label">Desplegable</span>
              <div className="footer-check">
                <CheckSquare size={14} className="check-icon" />
                <span>Listado Confirmación: {selectedAffirmation ? countChecked(selectedAffirmation.evidences.map(e => e.id), checkedEvidences) : 0}/{selectedAffirmation?.evidences.length || 0}</span>
              </div>
            </div>
          </div>

          {/* COLUMN 4: TEMAS ASOCIADOS A LA PREGUNTA */}
          <div className="column-panel highlight">
            <div className="panel-header">
              <span className="panel-title">Temas Asociados a la Pregunta</span>
            </div>

            <div className="panel-content">
              <div className="items-list">
                {selectedAffirmation ? (
                  Object.entries(groupByCategory(selectedAffirmation.topics)).map(([category, topics]) => (
                    <div key={category} className="topic-group">
                      <div className="group-header">
                        <Tag size={12} />
                        <span>{category}</span>
                        <span className="group-count">{topics.length}</span>
                      </div>
                      {topics.map((topic: any) => (
                        <div
                          key={topic.id}
                          className={`list-item topic-item ${checkedTopics[topic.id] ? 'completed' : ''} ${expandedItems[topic.id] ? 'expanded' : ''}`}
                        >
                          <div className="item-header">
                            <button
                              className="item-checkbox"
                              onClick={() => setCheckedTopics(prev => ({ ...prev, [topic.id]: !prev[topic.id] }))}
                            >
                              {checkedTopics[topic.id] ? <CheckSquare size={16} className="checked" /> : <Square size={16} />}
                            </button>
                            <span className="item-text">{topic.name}</span>
                            {topic.suggestion && (
                              <button
                                className="tip-btn"
                                onClick={() => setShowTip(showTip === topic.id ? null : topic.id)}
                              >
                                <Lightbulb size={12} />
                              </button>
                            )}
                          </div>
                          {showTip === topic.id && topic.suggestion && (
                            <div className="tip-content">
                              💡 {topic.suggestion}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))
                ) : (
                  <div className="empty-hint">
                    <Lock size={20} />
                    <span>Define tu ruta para ver los temas</span>
                  </div>
                )}
              </div>
            </div>

            <div className="panel-footer">
              <span className="footer-label">Desplegable</span>
              <div className="footer-check">
                <CheckSquare size={14} className="check-icon" />
                <span>Listado Confirmación: {selectedAffirmation ? countChecked(selectedAffirmation.topics.map(t => t.id), checkedTopics) : 0}/{selectedAffirmation?.topics.length || 0}</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
