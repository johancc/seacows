insert into forum_categories (slug, name, description, sort_order) values
  ('general-discussion', 'General Discussion', 'Open discussion about aquatic bovine phenomena and site matters.', 1),
  ('confirmed-sightings', 'Confirmed Sightings', 'Reviewed sightings with sufficient evidence for registry confirmation.', 2),
  ('field-reports', 'Field Reports', 'Witness accounts, observation notes, and on-site documentation.', 3),
  ('research-taxonomy', 'Research & Taxonomy', 'Classification frameworks, terminology proposals, and article discussion.', 4),
  ('manatee-terminology-disputes', 'Manatee Terminology Disputes', 'Discussion of historical usage, public confusion, and definitional boundaries.', 5),
  ('simulation-pathfinding-theory', 'Simulation / Pathfinding Theory', 'Speculative discussion of anomalous bovine placement and environmental logic.', 6),
  ('field-methods-equipment', 'Field Methods & Equipment', 'Observation protocols, photography standards, hydration, notebooks, and distance guidance.', 7),
  ('site-announcements', 'Site Announcements', 'Moderator notices, registry policy changes, and public archive updates.', 8)
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  sort_order = excluded.sort_order;

insert into sightings (
  case_id, title, slug, reporter_handle, location_text, water_type,
  observed_at, cow_count, water_involvement, confidence_level,
  cow_behavior, energy_drink_present, description, status, public_summary,
  moderator_notes_public
) values
  (
    'SCAR-0001',
    'The Original Lake Cow',
    'scar-0001-the-original-lake-cow',
    'LakeWatcher',
    'Undisclosed lake',
    'Lake',
    '2021-07-18',
    1,
    'Partially submerged',
    'Confirmed with evidence',
    'Calm',
    'Unknown',
    'Subject was observed standing calmly within a lake environment. Witnesses reported no obvious distress, explanation, or conventional zoological framework sufficient to describe the event.',
    'confirmed',
    'Subject observed standing calmly within a lake environment. Witnesses reported no distress, explanation, or conventional zoological framework sufficient to describe the event.',
    'Classification based on direct witness report and meaningful aquatic presence.'
  ),
  (
    'SCAR-0002',
    'Cow Near Suspicious Pond',
    'scar-0002-cow-near-suspicious-pond',
    'FenceLineObserver',
    'Private pasture, county withheld',
    'Pond',
    '2022-03-04',
    1,
    'Near water',
    'Possible',
    'Stationary',
    'No',
    'Subject observed near pond perimeter. Degree of water involvement remains unresolved.',
    'under_review',
    'Subject observed near pond perimeter. Degree of water involvement remains unresolved.',
    'Additional detail requested regarding distance from waterline.'
  ),
  (
    'SCAR-0003',
    'Possible Canal Cow',
    'scar-0003-possible-canal-cow',
    'CanalDesk',
    'Canal maintenance corridor',
    'Canal',
    '2022-09-12',
    1,
    'Unclear',
    'Possible',
    'Unknown',
    'Prefer not to say',
    'Witness reports possible bovine presence near canal infrastructure. Evidence quality insufficient for confirmation.',
    'unverified',
    'Witness reports possible bovine presence near canal infrastructure. Evidence quality insufficient for confirmation.',
    null
  ),
  (
    'SCAR-0004',
    'Reservoir Grazing Anomaly',
    'scar-0004-reservoir-grazing-anomaly',
    'ReservoirClerk',
    'Municipal reservoir margin',
    'Reservoir',
    '2023-05-30',
    2,
    'Hooves in water',
    'Probable',
    'Grazing',
    'Unknown',
    'Reported hoof-water contact along reservoir edge. Classification pending additional witness detail.',
    'under_review',
    'Reported hoof-water contact along reservoir edge. Classification pending additional witness detail.',
    'Review is focused on whether hoof-water contact was incidental or sustained.'
  ),
  (
    'SCAR-0005',
    'Flooded Pasture Event',
    'scar-0005-flooded-pasture-event',
    'PastureArchivist',
    'Seasonally flooded pasture',
    'Flooded field',
    '2023-11-21',
    5,
    'Standing in water',
    'Confirmed by witness',
    'Calm',
    'No',
    'Although water contact was confirmed, moderator review determined the event resulted from temporary pasture flooding rather than voluntary aquatic presence.',
    'misclassified',
    'Although water contact was confirmed, moderator review determined the event resulted from temporary pasture flooding rather than voluntary aquatic presence.',
    'Retained as a public misclassification example for standards transparency.'
  )
on conflict (case_id) do update set
  title = excluded.title,
  status = excluded.status,
  public_summary = excluded.public_summary;

insert into forum_threads (
  category_id, slug, title, body, author_handle, status, is_pinned,
  views_count, replies_count, last_post_at
) values
  (
    (select id from forum_categories where slug = 'research-taxonomy'),
    'what-level-of-water-involvement-qualifies-a-cow-as-a-sea-cow',
    'What level of water involvement qualifies a cow as a sea cow?',
    'I am opening this thread because several recent submissions involve cattle standing near water but not clearly within it. Proximity alone should not be sufficient for registry inclusion.',
    'PastureArchivist',
    'approved',
    true,
    2042,
    18,
    now()
  ),
  (
    (select id from forum_categories where slug = 'confirmed-sightings'),
    'case-scar-0001-original-lake-cow-discussion',
    'Case SCAR-0001: Original Lake Cow discussion',
    'The public case file for SCAR-0001 is now available for reference. Please keep discussion focused on classification criteria, observed behavior, and evidentiary standards.',
    'LakeWatcher',
    'approved',
    true,
    9174,
    42,
    now()
  ),
  (
    (select id from forum_categories where slug = 'field-methods-equipment'),
    'i-accidentally-gave-my-cow-an-energy-beverage-field-reliability-notes',
    'I accidentally gave my cow an energy beverage. Field reliability notes?',
    'During a pasture repair day, a cow accessed an open canned energy beverage before I could remove it. Later that afternoon the same animal entered a shallow stock pond and remained there with unusual focus. I am not claiming causation.',
    'CattleContext',
    'approved',
    false,
    3184,
    31,
    now()
  ),
  (
    (select id from forum_categories where slug = 'simulation-pathfinding-theory'),
    'sea-cows-spotted-in-gta-6-trailer-frame-review-thread',
    'Sea cows spotted in GTA 6 trailer - frame review thread',
    'Several users have sent timestamps from a recent open-world game trailer that may show cattle near or in coastal water. Trailer material is not registry evidence.',
    'BoundaryLayer',
    'approved',
    false,
    5906,
    44,
    now()
  ),
  (
    (select id from forum_categories where slug = 'general-discussion'),
    'my-so-left-me-for-an-ai-seacow',
    'My SO left me for an AI seacow?',
    'I am not asking for relationship advice as much as terminology advice. Is a synthetic sea cow still part of the category if it exists in no water but is described as capable of both underwater and terrestrial life?',
    'TidalPersonal',
    'approved',
    false,
    2402,
    22,
    now()
  )
on conflict (slug) do update set
  title = excluded.title,
  body = excluded.body,
  status = excluded.status;

insert into articles (slug, title, subtitle, author_name, category, body_markdown, status, published_at) values
  (
    'on-the-misclassification-of-aquatic-bovines',
    'On the Misclassification of Aquatic Bovines',
    'A preliminary framework for distinguishing conventional sirenian usage from aquatic bovine field observations.',
    'Editorial Board',
    'Taxonomy',
    'The term sea cow has historically been applied to sirenians. This registry recognizes that usage while proposing a parallel classification for terrestrial cattle observed in meaningful aquatic contexts. The category remains open.',
    'published',
    '2026-06-01'
  ),
  (
    'the-registry-inclusion-framework-version-1-0',
    'The Registry Inclusion Framework, Version 1.0',
    'How sightings are classified, reviewed, and published.',
    'Editorial Board',
    'Registry Notes',
    'Submissions begin as pending. Moderators review witness detail, water involvement, evidence quality, and safety concerns before publication.',
    'published',
    '2026-04-12'
  )
on conflict (slug) do update set
  title = excluded.title,
  body_markdown = excluded.body_markdown,
  status = excluded.status;
