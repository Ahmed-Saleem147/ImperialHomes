export type Notification = {
  id: number;
  type: "late" | "absent" | "leave_approved" | "leave_denied" | "leave_request" | "shift" | "info";
  title: string;
  message: string;
  time: string;
  read: boolean;
  for: "management" | "staff" | "both";
};

export const notifications: Notification[] = [
  { id: 1, type: "leave_request", title: "New Leave Request", message: "Adwoa Boahene has submitted a sick leave request for 2–3 Jul.", time: "2 hours ago", read: false, for: "management" },
  { id: 2, type: "absent", title: "Absence Alert", message: "Efua Asiedu has not clocked in today. No leave on record.", time: "3 hours ago", read: false, for: "management" },
  { id: 3, type: "late", title: "Late Arrivals", message: "Yaw Osei and Kwabena Sarpong arrived after 8:30 AM today.", time: "4 hours ago", read: false, for: "management" },
  { id: 4, type: "leave_request", title: "New Leave Request", message: "Kojo Frimpong has requested annual leave for 10–14 Jul.", time: "Yesterday", read: true, for: "management" },
  { id: 5, type: "info", title: "Weekly Report Ready", message: "Attendance report for the week of 30 Jun is available.", time: "Yesterday", read: true, for: "management" },
  { id: 6, type: "shift", title: "Shift Reminder", message: "Morning shift starts at 8:00 AM tomorrow. Be on time.", time: "Yesterday", read: true, for: "management" },
  { id: 7, type: "late", title: "You Were Marked Late", message: "You clocked in at 9:05 AM on 1 Jul. Standard time is 8:00 AM.", time: "Yesterday", read: false, for: "staff" },
  { id: 8, type: "leave_approved", title: "Leave Approved", message: "Your emergency leave request for 5 Jul has been approved by HR.", time: "2 days ago", read: false, for: "staff" },
  { id: 9, type: "shift", title: "Shift Update", message: "Your shift for next week remains Morning Shift (8:00 AM – 5:00 PM).", time: "3 days ago", read: true, for: "staff" },
  { id: 10, type: "info", title: "Attendance Summary", message: "Your attendance rate this month is 94%. Keep it up!", time: "4 days ago", read: true, for: "staff" },
];

export const departments = [
  { id: 1, name: "Sales & Marketing", head: "Kofi Boateng", staff_count: 12, present: 10, late: 1, absent: 1 },
  { id: 2, name: "Finance & Accounts", head: "Akosua Darko", staff_count: 6, present: 6, late: 0, absent: 0 },
  { id: 3, name: "Construction & Engineering", head: "Yaw Osei", staff_count: 18, present: 15, late: 2, absent: 1 },
  { id: 4, name: "Human Resources", head: "Abena Mensah", staff_count: 4, present: 4, late: 0, absent: 0 },
  { id: 5, name: "Legal & Compliance", head: "Efua Asiedu", staff_count: 3, present: 2, late: 0, absent: 1 },
  { id: 6, name: "IT & Systems", head: "Kweku Amponsah", staff_count: 4, present: 4, late: 0, absent: 0 },
  { id: 7, name: "Operations", head: "Nana Acheampong", staff_count: 8, present: 7, late: 1, absent: 0 },
];

export const staffList = [
  { id: "IH001", name: "Kwame Asante", department: "Executive", role: "Chief Executive Officer", email: "k.asante@imperialhomesgh.com", phone: "+233 244 100 001", status: "active", joined: "2010-03-01" },
  { id: "IH002", name: "Abena Mensah", department: "Human Resources", role: "HR Manager", email: "a.mensah@imperialhomesgh.com", phone: "+233 244 100 002", status: "active", joined: "2012-06-15" },
  { id: "IH003", name: "Kofi Boateng", department: "Sales & Marketing", role: "Sales Director", email: "k.boateng@imperialhomesgh.com", phone: "+233 244 100 003", status: "active", joined: "2013-01-10" },
  { id: "IH004", name: "Akosua Darko", department: "Finance & Accounts", role: "Finance Manager", email: "a.darko@imperialhomesgh.com", phone: "+233 244 100 004", status: "active", joined: "2013-08-20" },
  { id: "IH005", name: "Yaw Osei", department: "Construction & Engineering", role: "Construction Manager", email: "y.osei@imperialhomesgh.com", phone: "+233 244 100 005", status: "active", joined: "2011-05-12" },
  { id: "IH006", name: "Ama Adjei", department: "Sales & Marketing", role: "Marketing Lead", email: "a.adjei@imperialhomesgh.com", phone: "+233 244 100 006", status: "active", joined: "2015-02-28" },
  { id: "IH007", name: "Kweku Amponsah", department: "IT & Systems", role: "IT Manager", email: "k.amponsah@imperialhomesgh.com", phone: "+233 244 100 007", status: "active", joined: "2016-09-05" },
  { id: "IH008", name: "Efua Asiedu", department: "Legal & Compliance", role: "Legal Counsel", email: "e.asiedu@imperialhomesgh.com", phone: "+233 244 100 008", status: "active", joined: "2017-03-14" },
  { id: "IH009", name: "Nana Acheampong", department: "Operations", role: "Operations Manager", email: "n.acheampong@imperialhomesgh.com", phone: "+233 244 100 009", status: "active", joined: "2014-11-22" },
  { id: "IH010", name: "Adwoa Boahene", department: "Sales & Marketing", role: "Sales Executive", email: "a.boahene@imperialhomesgh.com", phone: "+233 244 100 010", status: "active", joined: "2018-07-01" },
  { id: "IH011", name: "Kojo Frimpong", department: "Construction & Engineering", role: "Site Engineer", email: "k.frimpong@imperialhomesgh.com", phone: "+233 244 100 011", status: "active", joined: "2019-01-15" },
  { id: "IH012", name: "Akua Owusu", department: "Finance & Accounts", role: "Accountant", email: "a.owusu@imperialhomesgh.com", phone: "+233 244 100 012", status: "active", joined: "2020-03-10" },
  { id: "IH013", name: "Kwabena Sarpong", department: "Sales & Marketing", role: "Sales Executive", email: "k.sarpong@imperialhomesgh.com", phone: "+233 244 100 013", status: "active", joined: "2020-08-01" },
  { id: "IH014", name: "Esi Quaye", department: "Human Resources", role: "Administrative Assistant", email: "e.quaye@imperialhomesgh.com", phone: "+233 244 100 014", status: "active", joined: "2021-02-14" },
  { id: "IH015", name: "Fiifi Aidoo", department: "Sales & Marketing", role: "Marketing Executive", email: "f.aidoo@imperialhomesgh.com", phone: "+233 244 100 015", status: "active", joined: "2022-05-09" },
  { id: "IH016", name: "Maame Serwaa", department: "Operations", role: "Facilities Officer", email: "m.serwaa@imperialhomesgh.com", phone: "+233 244 100 016", status: "active", joined: "2021-09-20" },
  { id: "IH017", name: "Kofi Annan Jr.", department: "Construction & Engineering", role: "Quantity Surveyor", email: "k.annan@imperialhomesgh.com", phone: "+233 244 100 017", status: "active", joined: "2019-06-03" },
  { id: "IH018", name: "Afia Bonsu", department: "Legal & Compliance", role: "Compliance Officer", email: "a.bonsu@imperialhomesgh.com", phone: "+233 244 100 018", status: "active", joined: "2023-01-16" },
];

export const attendanceRecords = [
  { id: 1, date: "2026-07-02", staff_id: "IH003", staff_name: "Kofi Boateng", department: "Sales & Marketing", status: "present", source: "ZKTeco", marked_at: "7/2/2026, 8:12:34 AM" },
  { id: 2, date: "2026-07-02", staff_id: "IH004", staff_name: "Akosua Darko", department: "Finance & Accounts", status: "present", source: "ZKTeco", marked_at: "7/2/2026, 8:05:11 AM" },
  { id: 3, date: "2026-07-02", staff_id: "IH005", staff_name: "Yaw Osei", department: "Construction & Engineering", status: "late", source: "ZKTeco", marked_at: "7/2/2026, 9:14:22 AM" },
  { id: 4, date: "2026-07-02", staff_id: "IH006", staff_name: "Ama Adjei", department: "Sales & Marketing", status: "present", source: "ZKTeco", marked_at: "7/2/2026, 7:58:44 AM" },
  { id: 5, date: "2026-07-02", staff_id: "IH007", staff_name: "Kweku Amponsah", department: "IT & Systems", status: "present", source: "ZKTeco", marked_at: "7/2/2026, 8:22:05 AM" },
  { id: 6, date: "2026-07-02", staff_id: "IH009", staff_name: "Nana Acheampong", department: "Operations", status: "present", source: "ZKTeco", marked_at: "7/2/2026, 8:00:30 AM" },
  { id: 7, date: "2026-07-02", staff_id: "IH010", staff_name: "Adwoa Boahene", department: "Sales & Marketing", status: "absent", source: "—", marked_at: "—" },
  { id: 8, date: "2026-07-02", staff_id: "IH011", staff_name: "Kojo Frimpong", department: "Construction & Engineering", status: "present", source: "ZKTeco", marked_at: "7/2/2026, 7:45:18 AM" },
  { id: 9, date: "2026-07-02", staff_id: "IH012", staff_name: "Akua Owusu", department: "Finance & Accounts", status: "present", source: "ZKTeco", marked_at: "7/2/2026, 8:10:52 AM" },
  { id: 10, date: "2026-07-02", staff_id: "IH013", staff_name: "Kwabena Sarpong", department: "Sales & Marketing", status: "late", source: "ZKTeco", marked_at: "7/2/2026, 9:05:33 AM" },
  { id: 11, date: "2026-07-02", staff_id: "IH014", staff_name: "Esi Quaye", department: "Human Resources", status: "present", source: "ZKTeco", marked_at: "7/2/2026, 8:17:44 AM" },
  { id: 12, date: "2026-07-02", staff_id: "IH015", staff_name: "Fiifi Aidoo", department: "Sales & Marketing", status: "present", source: "ZKTeco", marked_at: "7/2/2026, 8:30:12 AM" },
  { id: 13, date: "2026-07-01", staff_id: "IH003", staff_name: "Kofi Boateng", department: "Sales & Marketing", status: "present", source: "ZKTeco", marked_at: "7/1/2026, 8:08:20 AM" },
  { id: 14, date: "2026-07-01", staff_id: "IH005", staff_name: "Yaw Osei", department: "Construction & Engineering", status: "present", source: "ZKTeco", marked_at: "7/1/2026, 8:02:11 AM" },
  { id: 15, date: "2026-07-01", staff_id: "IH006", staff_name: "Ama Adjei", department: "Sales & Marketing", status: "present", source: "ZKTeco", marked_at: "7/1/2026, 7:55:44 AM" },
];

export const leaveRequests = [
  { id: 1, staff_id: "IH010", staff_name: "Adwoa Boahene", department: "Sales & Marketing", type: "Sick Leave", from: "2026-07-02", to: "2026-07-03", days: 2, reason: "Medical appointment and recovery", status: "pending", submitted: "2026-07-01" },
  { id: 2, staff_id: "IH011", staff_name: "Kojo Frimpong", department: "Construction & Engineering", type: "Annual Leave", from: "2026-07-10", to: "2026-07-14", days: 5, reason: "Family vacation", status: "pending", submitted: "2026-06-28" },
  { id: 3, staff_id: "IH013", staff_name: "Kwabena Sarpong", department: "Sales & Marketing", type: "Emergency Leave", from: "2026-07-05", to: "2026-07-05", days: 1, reason: "Family emergency", status: "approved", submitted: "2026-07-01" },
  { id: 4, staff_id: "IH015", staff_name: "Fiifi Aidoo", department: "Sales & Marketing", type: "Annual Leave", from: "2026-07-20", to: "2026-07-25", days: 6, reason: "Planned vacation", status: "pending", submitted: "2026-06-25" },
  { id: 5, staff_id: "IH017", staff_name: "Kofi Annan Jr.", department: "Construction & Engineering", type: "Sick Leave", from: "2026-06-30", to: "2026-07-01", days: 2, reason: "Fever and rest", status: "approved", submitted: "2026-06-29" },
];

export const weeklyStats = [
  { day: "Mon", present: 48, late: 4, absent: 3 },
  { day: "Tue", present: 51, late: 2, absent: 2 },
  { day: "Wed", present: 49, late: 3, absent: 3 },
  { day: "Thu", present: 50, late: 2, absent: 3 },
  { day: "Fri", present: 46, late: 5, absent: 4 },
  { day: "Sat", present: 12, late: 1, absent: 0 },
  { day: "Today", present: 48, late: 3, absent: 4 },
];

export const shifts = [
  { id: 1, name: "Morning Shift", start_time: "08:00 AM", end_time: "05:00 PM", days: ["Mon", "Tue", "Wed", "Thu", "Fri"], departments: ["Sales & Marketing", "Finance & Accounts", "Human Resources", "Legal & Compliance", "IT & Systems", "Executive"] },
  { id: 2, name: "Site Shift A", start_time: "07:00 AM", end_time: "04:00 PM", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], departments: ["Construction & Engineering"] },
  { id: 3, name: "Operations Shift", start_time: "07:30 AM", end_time: "04:30 PM", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], departments: ["Operations"] },
];
