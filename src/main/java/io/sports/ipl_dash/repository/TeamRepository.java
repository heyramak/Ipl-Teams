package io.sports.ipl_dash.repository;

import org.springframework.data.repository.CrudRepository;

import io.sports.ipl_dash.model.Team;
import java.util.List;
public interface TeamRepository extends CrudRepository<Team, Long>  {

    Team findByTeamName(String teamName);
    List<Team> findAllByOrderByTotalWinsDesc();
    
}